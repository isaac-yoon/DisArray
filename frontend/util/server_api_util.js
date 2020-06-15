export const createServer = (server) => (
  $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: server,
    contentType: false,
    processData: false,
  })
)

export const destroyServer = (serverId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers/${serverId}`,
  })
)

export const getServers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/servers',
  })
)

export const getServer = (serverId) => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}`,
    data: { serverId }
  })
)

export const editServer = (server) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/servers/${server.id}`,
    data: { server }
  })
)

export const joinServer = (inviteCode) => {
  return $.ajax({
    method: 'POST',
    url: `/api/servers/join`,
    data: { inviteCode }
  })
}

export const leaveServer = (serverId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/servers/`,
    data: { serverId }
  })
}