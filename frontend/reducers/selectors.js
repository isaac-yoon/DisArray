// returns channel messages that are specific to the channel
// filter = channel id


export const filterChannelMessages = (messages, filter) => {
  let result = [];

  Object.values(messages).forEach((message) => {
    if (message.channelId == filter) result.push(message);
  });

  return result;
};