import React from "react";
import ReactDOM from "react-dom";
import * as APIChannelUtil from './util/channel_api_util';
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
  window.createChannel = APIChannelUtil.createChannel;
  window.destroyChannel = APIChannelUtil.destroyChannel;
  window.getChannels = APIChannelUtil.getChannels;
  // window.getChannel = APIChannelUtil.getChannel;
  window.editChannel = APIChannelUtil.editChannel;

  window.destroyServer = APIServerUtil.destroyServer;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // END TESTING


  ReactDOM.render(< Root store = {store} />, root);
});