import React from 'react';
import ChannelIndexContainer from './channel_index_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Switch, Redirect, Route } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const SideBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className="main-app-side-bar">

      <div className="main-app-side-bar-name-container">
        PLACEHOLDER FOR SERVER NAME
      </div>

      <div className="main-app-side-bar-content">
        <Switch>
          <ProtectedRoute path= "/channels/@me/:server_id" component = {ChannelIndexContainer} />
        </Switch>
      </div>

    </div>
  )
}

export default SideBar;