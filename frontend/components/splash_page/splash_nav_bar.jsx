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
          <i class="fa-brands alt fa-linkedin-in" href="https://www.linkedin.com/in/lucidlaughter" target="_blank"></i>
          <i class="fa-brands alt fa-github" href="https://www.github.com/isaac-yoon/DisArray" target="_blank"></i>
        </div>
      </div>

    </div>
  )
}

export default SplashNavBar;