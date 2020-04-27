import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  if (props.currentUser !== undefined) {
    return (
      <div className='welcome'>
        <h6>
          You are logged in {props.currentUser.username}!
        </h6>
        <button id='welcome-button' onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div className='links'>
        <Link to="/signup">
          Sign Up
        </Link>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <Link to="/login">
          Login
        </Link>
      </div>
    )
  }
}

export default Welcome;