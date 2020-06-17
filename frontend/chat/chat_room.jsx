import React from 'react';
import MessageForm from './message_form';
import { getChannelMessages } from '../reducers/selectors';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      channelId: this.props.match.params.channelId,
    }

    this.props.fetchChannelMessages()
      .then((res) => this.setState({ messages: getChannelMessages(this.props.messages, this.props.match.params.channelId) }));
    // add a selector here

    this.bottom = React.createRef();
  }

  componentDidMount() {    
    App.cable.subscriptions.create(
      {
        // this needs to match chat_channel.rb
        channel: "ChatChannel",
        channelId: this.state.channelId,
      },
      {
        received: data => {
          debugger
          switch (data.type) {
            case 'message':
              this.setState({
                messages: this.state.messages.concat(data)
              });
              break;
          }
        },
        // received will be invoked when the subscription broadcasts from the backend
        speak: function (data) {
          return this.perform("speak", data)
        },
        // performs the speak method in the backend while passing in some data
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.bottom.current !== null) this.bottom.current.scrollIntoView();
  }

  componentWillUnmount() {
    App.cable.disconnect();
  }

  render() {
    console.log('state messages', this.state.messages);
    console.log('props messages', this.props.messages);
    const messageList = this.state.messages.map(message => {
      return(
        <div key={message.id}>
          <li id="message-list-items">
            { message.body }
            {/* add name of the user by pulling out message.author_id? */}
          </li>
          <div id="channel-message-bottom" ref={this.bottom} />

        </div>
      )
    });

    return (
      <div className="chatroom-container">

        <div className="message-list">{messageList}</div>
        
        <MessageForm 
          channelId = {this.state.channelId}
          currentUser = {this.props.currentUser}
        />
      </div>
    )
  }
}

export default ChatRoom;