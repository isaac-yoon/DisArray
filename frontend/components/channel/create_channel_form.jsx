import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      serverId: props.location.pathname.split('/')[3] || '',
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

    const channel = Object.assign({}, this.state)

    this.props.createChannel(channel)
      .then(() => {
        this.setState({name: ''});
        this.props.closeModal();
      })
  }

  render() {
    return (
      <div className = "create-channel-form">
        {this.props.errors.map(error => {
          return (
            <ul className="session-errors">
              <li id="session-errors-error">{error}</li>
            </ul>
          )
        })}

        <div className="create-channel-form-top-container">
          <div id="create-channel-form-top-container-header">CREATE TEXT CHANNEL</div>
          
          <div id="create-channel-form-secondary-message">within your server</div>
          <div id="create-channel-form-secondary-message">to chat with your friends!</div>
        </div>

        <div id="channel-name-input-container">
          <div id="text-channel-name">
            CHANNEL NAME
          </div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInput('name')}
            className="create-channel-input"
          ></input>
        </div>

        <div className="create-channel-buttons">
          <button className="create-channel-button" onClick={this.props.closeModal}>
            Cancel
          </button>

          <button className="create-channel-button" id="create-channel-button" onClick={this.handleSubmit}>
            Create Channel
          </button>
        </div>

      </div>
    );
  }
};

export default CreateChannelForm;