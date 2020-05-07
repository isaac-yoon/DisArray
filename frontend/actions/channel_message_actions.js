export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export const setMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    messages
  }
}

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

