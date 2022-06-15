import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className = "main-nav-bar">
      <div className = "main-nav-bar-login-button-container">
        <FontAwesomeIcon icon="fa-brands fa-github" href="https://www.github.com/isaac-yoon"
        />
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" href="https://www.linkedin.com/in/lucidlaughter" />
      </div>

    </div>
  )
}

export default SplashNavBar;