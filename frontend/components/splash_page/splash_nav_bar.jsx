import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SplashNavBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className = "main-nav-bar">
      <div className = "main-nav-bar-login-button-container">
        <Link to={{pathname: "https://github.com/isaac-yoon"}}>
          <FaGithub></FaGithub>
        </Link>
        <Link to={{pathname: "https://linkedin.com/in/lucidlaughter"}}>
          <FaLinkedinIn></FaLinkedinIn>
        </Link>
      </div>

    </div>
  )
}

export default SplashNavBar;