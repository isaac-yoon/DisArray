import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from './util/server_api_util';
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
  window.createServer = APIUtil.createServer;
  window.destroyServer = APIUtil.destroyServer;
  window.getServers = APIUtil.getServers;
  window.getServer = APIUtil.getServer;
  window.editServer = APIUtil.editServer;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // END TESTING


  ReactDOM.render(< Root store = {store} />, root);
});