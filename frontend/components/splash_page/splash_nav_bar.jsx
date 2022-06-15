import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SplashNavBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className = "main-nav-bar">
      <div className = "main-nav-bar-icons-container">
        <a href="https://www.github.com/isaac-yoon" target="_blank">
          <FaGithub className="main-nav-bar-icons"></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/lucidlaughter" target="_blank">
          <FaLinkedinIn className="main-nav-bar-icons"></FaLinkedinIn>
        </a>
      </div>
    </div>
  )
}

export default SplashNavBar;