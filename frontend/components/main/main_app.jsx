import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar_container';
import SideBar from '../sidebar/main_app_side_bar';
import ChannelNameContainer from './channel_name_container';
import ChatRoomContainer from '../../chat/chat_room_container';
import ChatRoomPlaceHolder from './chatroom_placeholder';
import MemberListPlaceHolder from './memberlist_placeholder';
import MemberListContainer from './member_list_container';

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
              <Switch>
                < ProtectedRoute path="/channels/@me/:serverId/:channelId" component={ChannelNameContainer} />
                < ProtectedRoute path="/channels/@me" component={ChannelNameContainer} />
              </Switch>
            </div>

            <div className="main-app-content-secondary-container">
              <Switch>
                <ProtectedRoute exact path="/channels/@me/:serverId/:channelId" component={ ChatRoomContainer } />
                <ProtectedRoute path="/channels/@me/" component={ ChatRoomPlaceHolder }  />
              </Switch>
              <div className="main-app-friends-bar">
                <div id="main-app-friends-bar-top">
                  <Switch>
                    <ProtectedRoute path="/channels/@me/:serverId" component={ MemberListContainer } />
                    <ProtectedRoute path="/channels/@me" component={ MemberListPlaceHolder } />
                  </Switch>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Main;