import React from 'react';
import { withRouter } from 'react-router-dom';

class InviteCodeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serverId: this.props.match.params.serverId,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.setState({
        serverId: this.props.match.params.serverId
      })
    }
  }
  
  render() {
    return (
      <div>
        <div>Invite Code</div>
        <div>{this.props.servers && this.state.serverId ? this.props.servers[this.state.serverId].inviteCode : null}</div>
      </div>
    )
  }
}

export default InviteCodeModal;