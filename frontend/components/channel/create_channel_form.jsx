import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
        this.setState({
          name: '',
        });
        this.props.closeModal();
      })
      // .then(() => this.props.history.push('/channels/@me'));
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

        <form onSubmit={this.handleSubmit}>
          <label className="create-channel-label">
            <br/>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder="Choose a name"
              className="create-channel-input"
            >
            </input>
            <br/>

            <button
              className="create-channel-button"
            >
            Create Channel
            </button>

          </label>
        </form>
      </div>
    );
  }
};

export default CreateChannelForm;