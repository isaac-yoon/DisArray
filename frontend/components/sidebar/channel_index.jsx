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
        <div id = "channel-index-header-container">
          <div id="channel-index-header">TEXT CHANNELS</div>
          
          <div>
            <svg class="add-channel-button-svg" aria-hidden="false" width="18" height="18" viewBox="0 0 18 18"><polygon fill-rule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
          </div>
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