import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeNavBar = () => {

  // reminder: there are still login, demo, and signup modals in the file tree
  // they were removed and changed to link to the login/signup pages instead for a cleaner user experience
  
  return (
    <div
      className = "welcome-nav-bar-login-signup-links"
    >
      <nav className="login-signup">
        <Link to="login">
          <button
            id="welcome-login-button"
          >LOGIN</button>
        </Link>

        <Link to="register">
          <button
            id="welcome-signup-button"
          >SIGNUP</button>  
        </Link>
      </nav>
    </div>
  )
}

export default WelcomeNavBar;