import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout, openModal }) => {

  if (currentUser !== undefined) {
    return (
      <div className='welcome'>
        <h6>
          You are logged in {currentUser.username}!
        </h6>
        <button id='welcome-button' onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div className='links'>
        <nav className="login-signup">
          <button onClick={() => openModal('login')}>
            LOGIN
          </button>

            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;

          <button onClick={() => openModal('signup')}>
            SIGNUP
          </button>
        </nav>
      </div>
    )
  }
}

export default Welcome;