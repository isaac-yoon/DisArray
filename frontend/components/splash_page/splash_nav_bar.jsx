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
          <img 
            alt="GitHub"
            src={window.github}
            // class="fa-brands"
            style="width:2em; height:3em"
          />
          <img 
            alt="GitHub"
            src={window.linkedin}
            style="width:2em; height:3em"
            // class="fa-brands"
          />
        </div>
      </div>

    </div>
  )
}

export default SplashNavBar;