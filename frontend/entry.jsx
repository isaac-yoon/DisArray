import React from "react";
import ReactDOM from "react-dom";
import * as APIChannelActions from './actions/channel_actions';
import * as APIServerActions from './actions/server_actions';
import * as ChannelMessagesAPIUtil from './util/channel_message_api_util';
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
  window.createChannel = APIChannelActions.createChannel;
  window.deleteChannel = APIChannelActions.deleteChannel;
  window.getChannels = APIChannelActions.getChannels;
  // window.getChannel = APIChannelActions.getChannel;
  window.editChannel = APIChannelActions.editChannel;

  window.deleteServer = APIServerActions.deleteServer;

  window.getChannelMessages = ChannelMessagesAPIUtil.getChannelMessages;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // END TESTING


  ReactDOM.render(< Root store = {store} />, root);
});