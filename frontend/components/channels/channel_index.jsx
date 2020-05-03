import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {

  componentDidMount() {
    if (this.props.match.params.server_id !== null || this.props.match.params.server_id !== undefined) {
      this.props.getChannels(this.props.match.params.server_id)
    }
  }


  componentDidUpdate(previousProps) {
    if (previousProps.match.params.server_id !== this.props.match.params.server_id && (this.props.match.params.server_id !== undefined || this.props.match.params.server_id !== null)) {
      this.props.getChannels(this.props.match.params.server_id)
    }
  }

  render() {
    return (
      <div className = "channel-info-container">
        <div className = "channel-info-server-name">
          PLACEHOLDER FOR SERVER NAME
        </div>
        <div className="channel-index-list">
          {this.props.channels.map((channel) => (
            <ChannelIndexItem key={channel.id} channel={channel} />
          ))}
        </div>
      </div>
    )
  }
}

export default ChannelIndex;