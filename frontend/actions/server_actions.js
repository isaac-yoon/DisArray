import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export const REPLACE_SERVERS = 'REPLACE_SERVERS';


export const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
})

export const receiveServer = server => {
  return {
    type: RECEIVE_SERVER,
    server
  }
}

export const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
})

export const getServers = () => (dispatch) => {
  return ServerAPIUtil.getServers()
    .then(servers => dispatch(receiveServers(servers)))
}

export const getServer = (serverId) => (dispatch) => {
  return ServerAPIUtil.getServer(serverId)
    .then(server => dispatch(receiveServer(server)))
}

export const createServer = server => dispatch => {
  return ServerAPIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)))
}

export const editServer = server => dispatch => {
  return ServerAPIUtil.editServer(server)
    .then(server => dispatch(receiveServer(server)))
}

export const deleteServer = serverId => dispatch => {
  return ServerAPIUtil.destroyServer(serverId)
    .then(() => dispatch(removeServer(serverId)))
}

export const joinServer = inviteCode => dispatch => {
  return ServerAPIUtil.joinServer(inviteCode)
    .then((server) => {
      return dispatch(receiveServer(server))
    })
}

export const leaveServer = serverId => dispatch => {
  return ServerAPIUtil.leaveServer(serverId)
    .then((serverId) => dispatch(removeServer(serverId)))
}