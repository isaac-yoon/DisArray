import {
  SET_MESSAGES,
  ADD_MESSAGE,
} from '../actions/channel_message_actions';

const channelMessagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, oldState, action.message)
    case SET_MESSAGES:
      return action.messages
    default:
      return oldState;
  }
}

export default channelMessagesReducer;