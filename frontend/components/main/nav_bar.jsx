import React from 'react';
import ServerIndexContainer from './server_index_container';
import {Link} from 'react-router-dom';

const NavBar = ({logout, openModal}) => {
    return(
      <div className="main-app-nav-bar">
          <Link to="/channels/@me">
            <div className = "main-app-icon-container" id="discordicon-container">
              <img alt="discordicon" src={window.discordicon} className="main-app-nav-bar-discordicon"/>
            </div>
          </Link>

        <div className = "guild-separator"></div>

        <div className='main-app-nav-bar-middle'>
          <ServerIndexContainer />
        </div>

        <div className="guild-separator"></div>

        <button id="main-add-server" onClick = {() => openModal('create-join-server')}>
          <div id="main-add-server">
            <svg className="circleIcon-LvPL6c" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <path id="plus-sign" fill="currentColor" d="M21 11.001H13V3.00098H11V11.001H3V13.001H11V21.001H13V13.001H21V11.001Z"></path>
            </svg>
          </div>
        </button>
      </div>
    )
}

export default NavBar;