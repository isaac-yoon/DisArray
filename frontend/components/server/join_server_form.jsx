import React from 'react';

class JoinServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inviteCode: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.joinServer(this.state.inviteCode).then(() => {
      this.setState({
        inviteCode: '',
      });
      this.props.closeModal();
    })
  }

  render() {
    const { openModal } = this.props;
    
    return (
      <div className = "join-server-form">
        {this.props.errors.map(error => {
          return (
            <ul className = "session-errors">
              <li id="session-errors-error">{error}</li>
            </ul>
          )
        })}

        <div>
          JOIN A SERVER
        </div>

        <div>
          Enter an invite below to join an existing server. The invite will look something like this:
        </div>

        <div className = "invite-codes-container">
          <div>D942C8CMFH29</div>
          <div>L23IJF019MUL</div>
        </div>

        <div className = "join-server-input">
          <input
            type="text"
            value={this.state.inviteCode}
            onChange={this.handleInput('inviteCode')}
            placeholder="Type your invite code"
            className="join-server-text-input"
          />
        </div>

        <div>
          <button
            onClick={() => openModal('create-join-server')}
            className="back-modal"
          >BACK
          </button>
          <button
            onClick={this.handleSubmit}
            className="join-server-button"
          >
            Join Server
          </button>
        </div>

      </div>
    );
  }
};

export default JoinServerForm;