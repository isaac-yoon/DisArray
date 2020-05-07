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
      // this needs to match chat_channel.rb
      {
        received: data => {
          switch (data.type) {
            case 'message':
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
              break;
            case 'messages':
              this.setState({
                messages: data.messages
              });
              break;
          }
        },
        // received will be invoked when the subscription broadcasts from the backend
        speak: function (data) {
          return this.perform("speak", data)
        },
        load: function() { 
          return this.perform("load") 
        }
        // performs the speak method in the backend while passing in some data
      }
    );
  }

  loadChat(e) {
    App.cable.subscriptions.subscriptions[0].load();
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }

  render() {
    debugger
    const { currentUser } = this.props;

    const messageList = this.state.messages.map(message => {
      return(
        <div key={message.id}>
          <li id="message-list-items">
            {currentUser.username ? currentUser.username : null } : {message}
          </li>

        </div>
      )
    });

    return (
      <div className="chatroom-container">
        <div>Channel</div>
        <button className="load-button"
          onClick={this.loadChat.bind(this)}>
          Load Chat History
        </button>
        <div className="message-list">{messageList}</div>
        <div ref={this.bottom} />
        <MessageForm />
      </div>
    )
  }
}

export default ChatRoom;