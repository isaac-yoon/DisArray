import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';
import Root from './components/root';

import * as APIServerUtil from './util/server_api_util';
import { fetchUsers } from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { 
          [window.currentUser.id]: window.currentUser,
        }
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
  

  window.leaveServer = APIServerUtil.leaveServer;
  window.fetchUsers = fetchUsers;

  // END TESTING


  ReactDOM.render(< Root store = {store} />, root);
});