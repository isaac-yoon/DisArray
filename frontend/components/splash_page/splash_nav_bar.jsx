import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className = "main-nav-bar">
      <div className = "main-nav-bar-login-button-container">
        {/* <Link to="/login" id="main-nav-bar-login-link">
          <button 
            className = "button" 
            id="main-nav-bar-login-button"
          >LOGIN</button>
        </Link> */}
        <div>
          <a class="linkedin-icon" href="https://www.linkedin.com/in/lucidlaughter" target="_blank"></a>
          <a class="github-icon" href="https://www.github.com/isaac-yoon/DisArray" target="_blank"></a>
        </div>
      </div>

    </div>
  )
}

export default SplashNavBar;