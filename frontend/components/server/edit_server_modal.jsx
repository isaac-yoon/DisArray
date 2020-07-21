import React from 'react';

class EditServerModal extends React.Component {
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
        <div>{this.props.servers ? this.props.servers[this.state.serverId].inviteCode : null }</div>
      </div>
    )
  }
}

export default EditServerModal;