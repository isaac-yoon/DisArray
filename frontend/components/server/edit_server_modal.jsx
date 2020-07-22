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
    const { openModal } = this.props;
    return (
      <div className="edit-server-modal">
        <div className="edit-server-option" onClick={() => openModal()}>Invite Friends</div>
        {/* <div>{this.props.servers ? this.props.servers[this.state.serverId].inviteCode : null }</div> */}
        <div className="edit-server-option">Edit Server</div>
        <div className="edit-server-option">Delete Server</div>
      </div>
    )
  }
}

export default EditServerModal;