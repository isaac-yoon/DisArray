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

        <form onSubmit={this.handleSubmit}>
          <label className="edit-channel-label">
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder="Choose a new name"
              className="edit-channel-input"
            >
            </input>
            <br />

            <button onClick ={() => this.props.closeModal()}>
              BACK
            </button>

            <button
              className="edit-channel-button"
            >
              Edit Channel
            </button>

          </label>
        </form>
      </div>
    );
  }
};

export default EditChannelForm;