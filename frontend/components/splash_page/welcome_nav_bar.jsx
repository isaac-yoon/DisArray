import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeNavBar = ({ currentUser, logout, openModal }) => {
  return (
    <div
      className = "welcome-nav-bar-login-signup-links"
    >
      <nav className="login-signup">
        <button
          id="welcome-login-button"
          onClick={() => openModal('login')}
        >LOGIN</button>

        <button
          id="welcome-demo-button"
          onClick={() => openModal('demo-login')}
        >TRY DEMO</button>

        <button
          id="welcome-signup-button"
          onClick={() => openModal('signup')}
        >SIGNUP</button>
      </nav>
    </div>
  )
}

export default WelcomeNavBar;