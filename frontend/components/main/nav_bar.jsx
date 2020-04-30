import React from 'react';

const NavBar = ({currentUser, logout}) => {
    return(
      <div className="main-app-nav-bar">
        This is the Nav Bar
        <div className='main'>

          <h6>
            You are logged in {currentUser.username}!
          </h6>

          <button 
            id='main-logout-button' 
            onClick={logout}
          >
          Log Out</button>

        </div>

      </div>
    )
}

export default NavBar;