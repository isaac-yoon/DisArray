import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = ({ channel }) => {
  return (
    <Link to={`/channels/@me/${channel.serverId}/${channel.id}`}>
      <div className="channel-index-item">
        <div id="channel-index-hashtag">#</div>
        {channel.name}
        <br />
      </div>
    </Link>
  )
}

export default ChannelIndexItem;