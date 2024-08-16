import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // Initialize userData state

  useEffect(() => {
    // Fetch user data from localStorage when component mounts
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      // Parse storedUserData if it exists
      setUserData(JSON.parse(storedUserData));
    }
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = document.querySelector('.navbar');
      if (currentScrollY > 0) {
        navbar.classList.add('navbar-scroll');
      } else {
        navbar.classList.remove('navbar-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };



  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isNavbarCollapsed ? '' : 'show'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src="assets/logot.png" alt="Brand Logo" className="d-inline-block align-text-top" />
          <div className="navbar-brand-text">Election Analysis</div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavbarToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home" onClick={() => ('/home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/progress" onClick={() => ('/progress')}>
                Progress News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/analysis" onClick={() => ('/analysis')}>
                Analysis
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ranking" onClick={() => ('/ranking')}>
                Ranking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/partiesP" onClick={() => ('/partiesP')}>
                VoteNow !
              </a>
            </li>
          </ul>
          <div className="navbar-text">
            <a href="/profile" className="d-block text-center p-2 round" onClick={() => ('/profile')}>
              <div>
                <img
                  src="assets/profile.jpg"
                  alt="Profile"
                  width="80"
                  height="80"
                  className="d-inline-block align-text-top rounded-circle"
                  style={{
                    transition: 'background-color 0.3s',
                  }}
                  onMouseOver={(event) => event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
                  onMouseOut={(event) => event.target.style.backgroundColor = 'transparent'}
                />
                {userData && (
                  <React.Fragment>
                    <h5>{userData.firstName}</h5>
                  </React.Fragment>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
