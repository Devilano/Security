import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { loginUserApi } from '../apis/Api';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../style/Login.css'; // Import CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [lockTime, setLockTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const lockEndTime = localStorage.getItem('lockEndTime');
    if (lockEndTime) {
      const now = new Date().getTime();
      if (now < lockEndTime) {
        setIsLocked(true);
        setLockTime(lockEndTime);
        const remainingTime = lockEndTime - now;
        setTimeout(() => setIsLocked(false), remainingTime);
        toast.error("Account is locked. Please try again later.");
      } else {
        localStorage.removeItem('lockEndTime');
        localStorage.removeItem('failedAttempts');
        setIsLocked(false);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLocked) {
      toast.error("Account is locked. Please try again later.");
      return;
    }

    const data = {
      email: email,
      password: password
    };

    loginUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          const failedAttempts = parseInt(localStorage.getItem('failedAttempts')) || 0;
          if (failedAttempts >= 2) {
            const lockEndTime = new Date().getTime() + 2 * 60 * 1000; // 2 minutes lock time
            localStorage.setItem('lockEndTime', lockEndTime);
            setIsLocked(true);
            setLockTime(lockEndTime);
            toast.error("Too many failed attempts. Your account is locked for 2 minutes.");
          } else {
            localStorage.setItem('failedAttempts', failedAttempts + 1);
            toast.error(res.data.message || "Password does not match.");
          }
        } else {
          localStorage.removeItem('failedAttempts');
          localStorage.removeItem('lockEndTime');
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.token);
          const jsonDecode = JSON.stringify(res.data.userData);
          localStorage.setItem('user', jsonDecode);

          const isAdmin = res.data.userData.isAdmin;

          if (isAdmin) {
            navigate('/dashboard');
          } else {
            navigate('/home');
          }
        }
      })
      .catch((err) => {
        toast.error('Server Error');
        console.log(err.message);
      });
  };

  return (
    <div className="login-page" style={{ marginTop: "130px" }}>
      <div className="login-container">
        <div className="login-form">
          <div className="login-logo">
            <img src={"assets/logot.png"} className="logo-img" alt="logo" />
          </div>
          <h3 className="login-title">Welcome Back !</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group btn-login">
              <button type="submit" className="btn btn-login">Login</button>
            </div>
          </form>
          <p className="text-center">
            <Link to="/forgetPassword">Forgot Password</Link>
          </p>
          <p className="text-center">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
