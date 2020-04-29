import React from 'react';
import { Link } from 'react-router-dom';

const MainNavBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className = "main-nav-bar">

      <div className = "main-nav-bar-discordicon">
        <Link to="/">
          <img 
            src={window.discordiconbackground}
            alt="discord-icon-background"
            id="main-nav-bar-discordiconbackground"
          />
        </Link>
      </div>

      <div className = "main-nav-bar-login-button-container">
        <Link to="/login" id="main-nav-bar-login-link">
          <button 
            className = "button" 
            id="main-nav-bar-login-button"
          >Login</button>
        </Link>
      </div>

    </div>
  )
}

export default MainNavBar;