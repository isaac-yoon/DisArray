import React from 'react';
import ServerIndexContainer from './server_index_container';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout, openModal}) => {
    return(
      <div className="main-app-nav-bar">
        <Link to="/channels/@me">
          <img
            alt="discordicon"
            src={window.discordicon}
            className="main-app-nav-bar-discordicon"
          />
        </Link>

        <div className='main-app-nav-bar-middle'>
          <h6>
            You are logged in {currentUser.username}!
          </h6>

          <ServerIndexContainer />
        </div>

        <button onClick = {() => openModal('create-server')}>
          Add Server
        </button>

        

        <button 
          id='main-logout-button' 
          onClick={logout}
        >
        Log Out</button>

      </div>
    )
}

export default NavBar;