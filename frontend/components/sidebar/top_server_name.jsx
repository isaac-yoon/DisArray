import React from 'react';
import TopServerNameContainer from './top_server_name_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Switch, Redirect, Route } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const TopServerName = ({ currentUser, logout, openModal }) => {
  return (
    <div className="main-app-side-bar-name-container">
      THIS IS THE TOP SERVER NAME
    </div>
  )
}

export default TopServerName;