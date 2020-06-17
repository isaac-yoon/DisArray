export const getChannelMessages = ({ messages, filter }) => {
  let result = [];

  for (let id in messages) {
    if (messages[id] === filter) result.push(messages[id]);
  }

  return result;
};

// returns channel messages that are specific to the channel
// filter should be the channel id