import React, { useState } from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faTimes, faTachometerAlt, faCog, faUsers,
  faFileAlt, faSignOutAlt, faBell, faComment, faUser,
  faUserGraduate, faChalkboardTeacher, faBook, faUserTie
} from '@fortawesome/free-solid-svg-icons';
import studentIcon1 from './images/img1.png';
import studentIcon2 from './images/img3.png';
import studentIcon3 from './images/img2.png';
import studentIcon4 from './images/img4.png';
import logo from './images/logo.png';
import CourseModal from './CourseModal'; // Import the CourseModal component

export default function AdminPortal() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Example courses data
  const courses = ['Math 101', 'Science 102', 'History 103', 'English 104'];

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
        <aside className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
          <nav>
            <ul>
              <li><a href="#home"><FontAwesomeIcon icon={faTachometerAlt} /> Home</a></li>
              <li><a href="#classes"><FontAwesomeIcon icon={faChalkboardTeacher} /> Classes</a></li>
              <li><a href="#subjects"><FontAwesomeIcon icon={faBook} /> Subjects</a></li>
              <li><a href="#teachers"><FontAwesomeIcon icon={faUserTie} /> Teachers</a></li>
              <li><a href="#students"><FontAwesomeIcon icon={faUserGraduate} /> Students</a></li>
              <li><a href="#notices"><FontAwesomeIcon icon={faBell} /> Notices</a></li>
              <li><a href="#complains"><FontAwesomeIcon icon={faComment} /> Complains</a></li>
              <li><a href="#profile"><FontAwesomeIcon icon={faUser} /> Profile</a></li>
              <li><a href="#logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a></li>
            </ul>
          </nav>
        </aside>
        <main className={`admin-main ${isSidebarOpen ? '' : 'full-width'}`}>
          <div className="admin-content">
            <h1>Welcome, Admin</h1>
            <div className="main-card">
              <div className="admin-card">
                <div className="std-icn"><img className='img' src={studentIcon1} alt="s" /></div>
                <div className="class-title">Total Students</div>
                <div className="points">0</div>
              </div>
              <div className="admin-card" onClick={openModal} style={{ cursor: 'pointer' }}>
                <div className="std-icn"><img className='img' src={studentIcon2} alt="s" /></div>
                <div className="class-title">Total Classes</div>
                <div className="points">0</div>
              </div>
              <div className="admin-card">
                <div className="std-icn"><img className='img' src={studentIcon3} alt="s" /></div>
                <div className="class-title">Total Teachers</div>
                <div className="points">0</div>
              </div>
              <div className="admin-card">
                <div className="std-icn"><img className='img' src={studentIcon4} alt="s" /></div>
                <div className="class-title">Fees Collections</div>
                <div className="points">0</div>
              </div>
              <div className="notice">
                <div className="both">
                  <div className="notice-content"></div>
                  <div className="notice-announce">No Notices to Show Right Now</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="admin-footer">
        <p>Admin Portal &copy; 2024</p>
      </footer>
      <CourseModal isOpen={isModalOpen} onClose={closeModal} courses={courses} />
    </>
  );
}
