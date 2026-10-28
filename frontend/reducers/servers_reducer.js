import { 
  RECEIVE_SERVER,
  RECEIVE_SERVERS,
  REMOVE_SERVER
} from '../actions/server_actions';

const serversReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SERVER:
      return Object.assign({}, oldState, {[action.server.id]: action.server})
    case RECEIVE_SERVERS:
      return Object.assign({}, action.servers)
    case REMOVE_SERVER:
      let nextState = Object.assign({}, oldState)
      delete nextState[action.serverId]
      return nextState;
    default:
      return oldState;
  }
}

export default serversReducer;