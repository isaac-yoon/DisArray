import React from 'react';

const ChannelName = (props) => {
  return (
    <div className="channel-name-container">
      <div id="channel-name-hashtag">#</div>
      &nbsp;
      &nbsp;
      <div id="channel-name-name">
        { props.channels[props.match.params.channelId] ? props.channels[props.match.params.channelId].name : null }
      </div>
    </div>
  )
};

export default ChannelName;