import React from 'react';
import NavBarContainer from './nav_bar_container';
import SideBar from '../sidebar/main_app_side_bar'
import ChatRoomContainer from '../../chat/chat_room_container';

const Main = () => {
  return(
    <div className = "main-app">
      <NavBarContainer />
      <div className = "main-app-content-page">
        <div className = "main-app-content-container">
          <div id="main-app-content-side-bar">
            <SideBar />
          </div>
          <div id="main-app-content">
            <div id="main-app-channel-name">
              PLACEHOLDER FOR CHANNEL NAME
            </div>

            <div className="main-app-content-secondary-container">
              <ChatRoomContainer />
              <div className="main-app-friends-bar">
                <div id="main-app-friends-bar-top">
                  PLACEHOLDER FOR FRIENDS
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}



export default Main;





