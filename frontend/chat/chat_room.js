import React from 'react';
import MessageForm from './message_form';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function (data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }

  render() {
    const messageList = this.state.messages.map(message => {
      return(
        <div key={message.id}>
          <li>
            {message}
          </li>

        </div>
      )
    });

    return (
      <div className="chatroom-container">
        <div>ChatRoom</div>
        <div className="message-list">{messageList}</div>
        <div ref={this.bottom} />
        <MessageForm />
      </div>
    )
  }
}

export default ChatRoom;