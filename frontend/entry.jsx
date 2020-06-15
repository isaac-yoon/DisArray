import React from "react";
import ReactDOM from "react-dom";
import * as APIChannelActions from './actions/channel_actions';
import * as APIServerActions from './actions/server_actions';
import * as ChannelMessagesAPIUtil from './util/channel_message_api_util';
import * as APIServerUtil from './util/server_api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // BEGIN TESTING

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  window.getChannelMessages = ChannelMessagesAPIUtil.getChannelMessages;
  window.joinServer = APIServerUtil.joinServer;
  window.joinServerAction = APIServerActions.joinServer;
  window.leaveServer = APIServerUtil.leaveServer;


  // END TESTING


  ReactDOM.render(< Root store = {store} />, root);
});