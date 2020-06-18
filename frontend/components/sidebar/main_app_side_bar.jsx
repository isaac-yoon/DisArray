import React from 'react';
import ChannelIndexContainer from './channel_index_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Switch, Redirect, Route } from 'react-router-dom';
import TopContainer from './top_server_name_container';
import TopHomePage from './top_home_page';
import BottomName from './bottom_name_container';

const SideBar = () => {
  return (
    <div className="main-app-side-bar">
      
      <div className="main-app-side-bar-name-container">
        <Switch>
          <ProtectedRoute path= "/channels/@me/:server_id" component = {TopContainer} />
          <ProtectedRoute exact path= "/channels/@me" component = {TopHomePage} />
        </Switch>
      </div>

      <div className="main-app-side-bar-content">
        <Switch>
          <ProtectedRoute path= "/channels/@me/:server_id/" component = {ChannelIndexContainer} />
        </Switch>
      </div>

      <div className="main-app-side-bar-bottom">
        <BottomName />
      </div>

    </div>
  )
}

export default SideBar;