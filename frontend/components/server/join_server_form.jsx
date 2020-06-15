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
          Join Server
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

        <button
          onClick={this.handleSubmit}
          className="join-server-button"
        >
          Join Server
        </button>
      </div>
    );
  }
};

export default JoinServerForm;