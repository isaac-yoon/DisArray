export const createChannel = (channel) => (
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: { channel },
  })
)

export const destroyChannel = (channelId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/channels/${channelId}`,
  })
)

export const getChannels = (serverId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/channels',
    data: { serverId:serverId }
  })
}
// export const getChannel = (channelId) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/channels/${channelId}`,
//     data: { channelId }
//   })
// )

export const editChannel = (channel) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: { channel }
  })
)