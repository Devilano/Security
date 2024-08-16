import React, { useState, useEffect } from 'react';
import "../style/profile.css"

const Profilecard = () => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showApprovalPopup, setShowApprovalPopup] = useState(false);
  const [userData, setUserData] = useState(null); // Initialize userData state

  useEffect(() => {
    // Fetch user data from localStorage when component mounts
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      // Parse storedUserData if it exists
      setUserData(JSON.parse(storedUserData));
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleLogout = () => {
    localStorage.clear();
    // Redirect to "/login" page
    window.location.href = "/login";    setShowLogoutPopup(false); // Close the logout popup
    console.log("Logout function called");
  };

  const handleEditProfile = () => {
    // Show the approval popup
    setShowApprovalPopup(true);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7', marginTop: "100px" }}>
      <div className="container py-5 h-100" >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                {userData && ( // Check if userData exists before rendering
                  <React.Fragment>
                    <div className="col-md-4 gradient-custom text-center text-white"
                      style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
                      <h5>{userData.firstName}</h5>
                      <p>{userData.party}</p>
                      <i className="far fa-edit mb-5"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>{userData.address}</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{userData.email}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>CitizenshipNo</h6>
                            <p className="text-muted">{userData.citizenno}</p>
                          </div>
                        </div>
                        <h6>Projects</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Party</h6>
                            <p className="text-muted">UML</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Age</h6>
                            <p className="text-muted">23</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                          <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                          <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-primary me-3" onClick={() => setShowLogoutPopup(true)}>Logout</button>
                          <button className="btn btn-secondary" onClick={handleEditProfile}>Edit Profile</button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logout Popup */}
      {showLogoutPopup && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Logout</h5>
                <button type="button" className="btn-close" onClick={() => setShowLogoutPopup(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to logout?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowLogoutPopup(false)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Approval Popup */}
      {showApprovalPopup && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Profile</h5>
                <button type="button" className="btn-close" onClick={() => setShowApprovalPopup(false)}></button>
              </div>
              <div className="modal-body">
                <p>Sent to admin site for approval</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => setShowApprovalPopup(false)}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Profilecard;
