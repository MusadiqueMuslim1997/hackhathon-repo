import React from 'react';
import './Style.css'; // Make sure you have this CSS file

const CourseModal = ({ isOpen, onClose, courses }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Available Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseModal;
