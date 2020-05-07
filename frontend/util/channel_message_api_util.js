export const createChannelMessages = (message) => (
  $.ajax({
    method: 'POST',
    // url: '/api/channel',
    data: { channel },
  })
)

// export const destroyChannel = (channelId) => (
//   $.ajax({
//     method: 'DELETE',
//     url: `/api/channels/${channelId}`,
//   })
// )

export const getChannelMessages = (channelId) => {
  return $.ajax({
    method: 'GET',
    // url: '/api/channels',
    data: { channelId: channelId }
  })
}

// export const getChannel = (channelId) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/channels/${channelId}`,
//     data: { channelId }
//   })
// )

// export const editChannel = (channel) => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/channels/${channel.id}`,
//     data: { channel }
//   })
// )