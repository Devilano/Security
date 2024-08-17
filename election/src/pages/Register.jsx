import React, { useState } from "react";
import { createUserApi, testApi } from '../apis/Api';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { SocialIcon } from 'react-social-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import '../style/Login.css'; // Import CSS file for styling
import DOMPurify from 'dompurify';

const Register = () => {
  const navigate = useNavigate();

  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [partyError, setPartyError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [citizennoError, setCitizenNoError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [CpasswordError, setCPasswordError] = useState('');
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [party, setParty] = useState("UML");
  const [address, setAddress] = useState("");
  const [citizenNo, setCitizenNO] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changeFirstName = (e) => {
    setFirstName(DOMPurify.sanitize(e.target.value));
  };
  const changeLastName = (e) => {
    setLastName(DOMPurify.sanitize(e.target.value));
  };
  const changeAge = (e) => {
    setAge(DOMPurify.sanitize(e.target.value));
  };
  const changeParty = (e) => {
    setParty(DOMPurify.sanitize(e.target.value));
  };
  const changeAddress = (e) => {
    setAddress(DOMPurify.sanitize(e.target.value));
  };
  const changeCitizenNo = (e) => {
    setCitizenNO(DOMPurify.sanitize(e.target.value));
  };
  const changeEmail = (e) => {
    setEmail(DOMPurify.sanitize(e.target.value));
  };
  const changePassword = (e) => {
    setPassword(DOMPurify.sanitize(e.target.value));
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(DOMPurify.sanitize(e.target.value));
  };

  const validate = () => {
    let isValid = true;
    setFnameError("");
    setLnameError("");
    setAgeError("");
    setPartyError("");
    setAddressError("");
    setCitizenNoError("");
    setEmailError("");
    setPasswordError("");
    setCPasswordError("");

    if (firstName.trim() === "") {
      setFnameError("Firstname is required");
      isValid = false;
    }
    if (lastName.trim() === "") {
      setLnameError("Lastname is required");
      isValid = false;
    }
    if (age.trim() === "") {
      setAgeError("Age is required");
      isValid = false;
    }
    if (party.trim() === "") {
      setPartyError("Your Fav Party is required");
      isValid = false;
    }
    if (address.trim() === "") {
      setAddressError("Address is required");
      isValid = false;
    }
    if (citizenNo.trim() === "") {
      setCitizenNoError("CitizenNo is required");
      isValid = false;
    }
    if (!isValidCitizenNo(citizenNo)) {
      setCitizenNoError("Invalid Citizenship No");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (!isValidPassword(password)) {
      setPasswordError("Password must be at least 8 characters long, include uppercase, lowercase, numbers, and special characters.");
      isValid = false;
    }
    if (confirmPassword.trim() === "") {
      setCPasswordError("Confirm Password is required");
      isValid = false;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setCPasswordError("Password and Confirm password doesn't match");
      isValid = false;
    }
    return isValid;
  };

  const isValidCitizenNo = (citizenNo) => {
    const nepaliCitizenNoPattern = /^[0-9]{6}[0-9]{4}[0-9]{1}$/;
    return nepaliCitizenNoPattern.test(citizenNo);
  };

  const isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      party: party,
      address: address,
      citizenNo: citizenNo,
      email: email,
      password: password,
    };
    createUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate('/login');
        }
      })
      .catch(err => {
        toast.error("Server Error");
        console.log(err.message);
      });
  };

  return (
    <div className="signup-page" style={{marginTop:"0px"}}>
      <div className="login-container" style={{marginTop:"100px",marginBottom:"0px"} }>
        <div className="login-logo">
          <img src={"assets/logot.png"} className="logo-img" alt="logo" />
        </div>
        <h3 className="login-title">Join us Now !</h3>
        
        <div className="login-form">
          <form>
            <div className="form-group">
              <input onChange={changeFirstName} type="text" id="form1Example13" className="form-control form-control-lg" placeholder="First Name"/>
              {fnameError && <p className='text-danger'>{fnameError}</p>}
            </div>
            <div className="form-group">
              <input onChange={changeLastName} type="text" id="form1Example23" className="form-control form-control-lg" placeholder="Last Name" />
              {lnameError && <p className='text-danger'>{lnameError}</p>}
            </div>
            <div className="form-group">
              <input onChange={changeAge} type="text" id="form1Example23" className="form-control form-control-lg" placeholder="Age" />
              {ageError && <p className='text-danger'>{ageError}</p>}
            </div>
            <div className="form-group">
              <input onChange={changeAddress} type="text" id="form1Example23" className="form-control form-control-lg" placeholder="Address" />
              {addressError && <p className='text-danger'>{addressError}</p>}
            </div>
            <select name="Categories" onChange={changeParty} className='form-control mb-2' value={party}>
              <option value="UML">UML</option>
              <option value="Congress">Congress</option>
              <option value="RSP">RSP</option>
              <option value="Maoist">Maoist</option>
            </select>
            {partyError && <p className='text-danger'>{partyError}</p>}

            <div className="form-group">
              <input onChange={changeCitizenNo} type="text" id="form1Example23" className="form-control form-control-lg" placeholder="Citizenship No" />
              {citizennoError && <p className='text-danger'>{citizennoError}</p>}
            </div>
            <div className="form-group">
              <input onChange={changeEmail} type="email" id="form1Example33" className="form-control form-control-lg" placeholder="Email" />
              {emailError && <p className='text-danger'>{emailError}</p>}
            </div>
            <div className="form-group">
              <input onChange={changePassword} type="password" id="form1Example43" className="form-control form-control-lg" placeholder="Password"/>
              {passwordError && <p className='text-danger'>{passwordError}</p>}
            </div>
            <div className="form-group">
              <input onChange={changeConfirmPassword} type="password" id="form1Example53" className="form-control form-control-lg" placeholder="Confirm Password" />
              {CpasswordError && <p className='text-danger'>{CpasswordError}</p>}
            </div>
            <button onClick={handleSubmit} className="btn-login">Register</button>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
            <a className="btn btn-login1" style={{ color: "white" }} href="#!" role="button">
              <i><SocialIcon url="https://facebook.com" /></i>Continue with Facebook
            </a>
            <a className="btn btn-login1" style={{ color: "white" }} href="#!" role="button">
              <i><FcGoogle /></i>Continue with Gmail
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
