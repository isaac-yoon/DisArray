import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className = "main-nav-bar">

      {/* <div className = "main-nav-bar-discordicon">
        <Link to="/">
          <img 
            src={window.discordiconbackground}
            alt="discord-icon-background"
            id="main-nav-bar-discordiconbackground"
          />
        </Link>
      </div> */}

      <div className = "main-nav-bar-middle">
        <a href="https://www.linkedin.com/in/lucidlaughter/">
          <img 
            src={window.linkedin}
            alt="linked-in-icon"
            className="main-nav-bar-icons"
            id="linked-in-icon"
          />
        </a>

        &nbsp;
        &nbsp;
        &nbsp;

        <a href="https://github.com/isaac-yoon">
          <img 
            src={window.github}
            alt="github-in-icon"
            className="main-nav-bar-icons"
            id="github-icon"
          />
        </a>
      </div>

      <div className = "main-nav-bar-login-button-container">
        <Link to="/login" id="main-nav-bar-login-link">
          <button 
            className = "button" 
            id="main-nav-bar-login-button"
          >LOGIN</button>
        </Link>
      </div>

    </div>
  )
}

export default SplashNavBar;