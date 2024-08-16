import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faHome, faUser, faCog, faUserGroup, faBarsProgress, faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../../style/dashboard.css'; // Import custom CSS file for additional styling
import VoteList from '../../pages/admin/VoteDashboard'; // Make sure the path is correct
import AdminCreateProgress from '../../pages/admin/AdminCreateProgress';
import AdminPartyDashboard from '../../pages/admin/AdminPartyDashboard';
import AnalysisBoard from '../../pages/AnalysisBoard';
import Homepage from '../../pages/Homepage';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to render the active component based on state
  const renderComponent = () => {
    switch (activeComponent) {
      case 'voteList':
        return <VoteList />;

      case 'analysis':
        return <AnalysisBoard />;

      case 'createprogress':
        return <AdminCreateProgress />;

      case 'partydashboard':
        return <AdminPartyDashboard />;

      case 'homepage':
        return <Homepage />;

      default:
        return <p>Welcome to your Election Analysis Data Side!</p>; // Default view
    }
  };

  return (
    <div className="d-flex dashboard-container" style={{ width: "100%", marginTop: "200px", marginBottom: "20px" }}>
      {/* Sidebar */}
      <div className={`bg-dark text-light sidebar ${sidebarOpen ? 'active' : ''}`}>
        <img src="assets/logot.png" alt="Brand Logo" className="brand-logo" />
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setActiveComponent('home')}>
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setActiveComponent('voteList')}>
              <FontAwesomeIcon icon={faUser} /> Vote Data
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setActiveComponent('analysis')}>
              <FontAwesomeIcon icon={faDatabase} /> Analysis
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setActiveComponent('partydashboard')}>
              <FontAwesomeIcon icon={faUserGroup} /> Party Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setActiveComponent('createprogress')}>
              <FontAwesomeIcon icon={faBarsProgress} /> Add Progress
            </a>
          </li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="content" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 250px)' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faAlignLeft} />
              <span>Toggle Sidebar</span>
            </button>
          </div>
        </nav>
        <div className="container-fluid">
          {/* Dynamically rendered component based on the active state */}
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
