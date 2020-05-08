import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: '',
      author_id: 1,
      channel_id: 1,
    };
  }

  update(field) {
    return e => 
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit() {
    // debugger
    event.preventDefault();
    console.log(App.cable)
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state
    });
    this.setState({
      body: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            id="channel-message-form-textinput"
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            // placeholder="Type message here"
          />
          <input 
            id="channel-message-form-submit-button"
            type="submit" 
          />
        </form>
      </div>
    );   
  }
}

export default MessageForm;