import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const removeChannel = channelId => ({
  type: REMOVE_CHANNEL,
  channelId
});

export const getChannels = (serverId) => (dispatch) => {
  return ChannelAPIUtil.getChannels(serverId)
    .then(channels => dispatch(receiveChannels(channels)))
};

export const createChannel = channel => dispatch => {
  return ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
};

export const editChannel = channel => dispatch => {
  return ChannelAPIUtil.editChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
};

export const deleteChannel = channelId => dispatch => {
  return ChannelAPIUtil.destroyChannel(channelId)
    .then(() => dispatch(removeChannel(channelId)))
};