import React, { useState } from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faTachometerAlt, faCog, faUsers, faFileAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function AdminPortal() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <div className="title">Admin Dashboard</div>
        <div className="email">Y</div>
      </header>
      <div className="admin-container">
        <button className="toggle-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
        </button>
        {isSidebarOpen && (
          <aside className="sidebar">
            <nav>
              <ul>
                <li><a href="#dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</a></li>
                <li><a href="#settings"><FontAwesomeIcon icon={faCog} /> Settings</a></li>
                <li><a href="#users"><FontAwesomeIcon icon={faUsers} /> Users</a></li>
                <li><a href="#reports"><FontAwesomeIcon icon={faFileAlt} /> Reports</a></li>
                <li><a href="#logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a></li>
              </ul>
            </nav>
          </aside>
        )}
        <main className={`admin-main ${isSidebarOpen ? '' : 'full-width'}`}>
          <div className="admin-content">
            <h1>Welcome, Admin</h1>
           <div className="main-card"> 
          <div className="admin-card"></div>
          </div>
          </div>
        </main>
      </div>
      <footer className="admin-footer">
        <p>Admin Portal &copy; 2024</p>
      </footer>
    </>
  );
}
