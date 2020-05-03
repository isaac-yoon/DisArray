import React from 'react';
import ChannelIndexContainer from './channel_index_container';
// import { Link } from 'react-router-dom';

const SideBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className="main-app-side-bar">

      <div className="main-app-side-bar-name-container">
        This is the Name Container
      </div>

      <div className="main-app-side-bar-content">
        <ChannelIndexContainer />
      </div>

    </div>
  )
}

export default SideBar;