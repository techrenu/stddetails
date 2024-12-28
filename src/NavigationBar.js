import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
     <div>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/contact" className="navbar-link">Contact Us</Link>
        <Link to="/student" className="navbar-link">Student</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
