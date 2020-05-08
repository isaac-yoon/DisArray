import * as ChannelMessagesAPIUtil from '../util/channel_message_api_util';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export const setChannelMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    messages: messages
  }
}

export const addChannelMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export const fetchChannelMessages = () => (dispatch) => {
  return ChannelMessagesAPIUtil.getChannelMessages()
    .then((channelMessages) => dispatch(setChannelMessages(channelMessages)))
}

// export const createChannelMessage = (message) => (dispatch) => {
//   return ChannelMessagesAPIUtil.createChannelMessages(message)
//     .then((res) => dispatch(addChannelMessage(res)))
// }