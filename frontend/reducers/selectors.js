// returns channel messages that are specific to the channel
// filter = channel id

export const filterChannelMessages = (messages, filter) => {
  let result = [];

  Object.values(messages).forEach((message) => {
    if (message.channelId == filter) result.push(message);
  });

  return result;
};



// export const filterServerMembers = (allUsers, server) => {
//   let result = [];

//   allUsers.forEach((member) => {
//     if (server) {
//       server.memberIds.forEach((memberId) => {
//         if (member.id === memberId) {
//           result.push(member);
//         }
//       })
//     }
//   });

//   return result;
// };

