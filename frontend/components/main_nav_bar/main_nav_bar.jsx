import React from 'react';
import { Link } from 'react-router-dom';

const MainNavBar = ({ currentUser, logout, openModal }) => {

  if (currentUser !== undefined) {
    <p>Current User is undefined!</p>
  } else {
    return (
      <p>Current User is defined!</p>
    )
  }
}

export default MainNavBar;