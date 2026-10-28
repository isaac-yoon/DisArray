import React from 'react';

class EditChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      channelId: props.location.pathname.split('/')[4] || '',
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
    this.props.editChannel(channel)
      .then(() => {
        this.setState({
          name: '',
        });
        this.props.closeModal();
      })
  }

  render() {
    return (
      <div className="edit-channel-form">
        {this.props.errors.map(error => {
          return (
            <ul className="session-errors">
              <li id="session-errors-error">{error}</li>
            </ul>
          )
        })}

        <div className="edit-channel-form-top-container">
          <div>EDIT TEXT CHANNEL</div>
        </div>

        <div id="edit-channel-name-input-container">
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInput('name')}
            placeholder="Choose a new name"
            className="edit-channel-input"
          ></input>
        </div>

        <div className="edit-channel-buttons">
          <button className="edit-channel-button" onClick ={() => this.props.closeModal()}>
            Cancel
          </button>

          <button className="edit-channel-button" id = "edit-channel-button" onClick={this.handleSubmit}>
            Edit Channel
          </button>
        </div>
      </div>
    );
  }
};

export default EditChannelForm;