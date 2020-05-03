import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
} from '../actions/channel_actions';

const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return Object.assign({}, oldState, { [action.channel.id]: action.channel })
    case RECEIVE_CHANNELS:
      return Object.assign({}, oldState, action.channels)
    case REMOVE_CHANNEL:
      let nextState = Object.assign({}, oldState)
      delete nextState[action.channelId]
      return nextState;
    default:
      return oldState;
  }
}

export default channelsReducer;