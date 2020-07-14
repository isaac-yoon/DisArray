import React from 'react';
import { withRouter } from 'react-router-dom';


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: '',
      author_id: this.props.currentUser.id,
      channel_id: this.props.channelId,
    };
  }

  update(field) {
    return e => 
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
      this.setState({
        channel_id: this.props.match.params.channelId,
      })
    }
  }

  handleSubmit() {
    event.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state,
      channelId: this.props.match.params.channelId
    });
    this.setState({
      body: ''
    });
  }

  render() {
    return (
      <div id="message-form-container">
        <form onSubmit={this.handleSubmit.bind(this)} id="channel-message-form">
          <input
            id="channel-message-form-textinput"
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Type message here"
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

export default withRouter(MessageForm);