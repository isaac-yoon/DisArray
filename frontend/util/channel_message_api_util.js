
export const getChannelMessages = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/channel_messages'
  })
}