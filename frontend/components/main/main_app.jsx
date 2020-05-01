import React from 'react';
import NavBarContainer from './nav_bar_container';

const Main = () => {
  return(
    <div className = "main-app">
      <NavBarContainer />
      <div className = "main-app-content-page">
        <div id="main-app-top-bar">
          This is the top bar that is always present for some asethetic reason
        </div>

        <div className = "main-app-content-container">
          <div id="main-app-content-side-bar">
            This is the side-bar component
          </div>
          <div id="main-app-content">
            This is the main component that will house messages later
          </div>
        </div>
      </div>
    </div>
  )
}



export default Main;





