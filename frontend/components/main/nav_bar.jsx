import React from 'react';
import ServerIndexContainer from './server_index_container';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout, openModal}) => {
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

        <button onClick = {() => openModal('create-server')}>
          <div id="main-add-server">
            Add
          </div>
        </button>

        <button onClick={logout}>
          <div id="main-logout-button">
            Log Out
          </div>
        </button>
      </div>
    )
}

export default NavBar;