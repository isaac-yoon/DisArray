import React from 'react';
import ServerIndexContainer from './server_index_container';


const NavBar = ({currentUser, logout}) => {
    return(
      <div className="main-app-nav-bar">
        <img
          alt="discordicon"
          src={window.discordicon}
          className="main-app-nav-bar-discordicon"
        />

        <div className='main-app-nav-bar-middle'>
          <h6>
            You are logged in {currentUser.username}!
          </h6>

          <ServerIndexContainer />
        </div>

        <button 
          id='main-logout-button' 
          onClick={logout}
        >
        Log Out</button>

      </div>
    )
}

export default NavBar;