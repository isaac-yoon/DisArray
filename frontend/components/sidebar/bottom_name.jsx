import React from 'react';

const BottomName = ({logout, currentUser}) => {
  return (
    <div className="side-bar-bottom">
      <div id="current-user-name">
        {currentUser.username}
      </div>

      <button id="main-logout-button" onClick={logout}>
          Log Out
      </button>
    </div>
  )
}

export default BottomName;