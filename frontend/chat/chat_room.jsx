import React from 'react';
import MessageForm from './message_form';
import { filterChannelMessages } from '../reducers/selectors';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      channelId: this.props.match.params.channelId,
    }

    this.props.fetchChannelMessages()
      .then(
        () => this.setState({
          messages: filterChannelMessages(this.props.messages, this.props.match.params.channelId) 
        })
      );

    this.bottom = React.createRef();
    this.formatTimestamp = this.formatTimestamp.bind(this);
  }

  componentDidMount() { 
    App.cable.subscriptions.create(
      {
        // this needs to match chat_channel.rb
        channel: "ChatChannel",
        channelId: this.state.channelId,
      },
      {
        // received will be invoked when the subscription broadcasts from the backend
        received: data => {
          switch (data.type) {
            case 'message':
              this.setState({
                messages: this.state.messages.concat(data)
              });
              break;
          }
        },
        // performs the speak method in the backend while passing in some data
        speak: function (data) {
          return this.perform("speak", data)
        },
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.bottom.current !== null) this.bottom.current.scrollIntoView();
  }

  componentWillUnmount() {
    App.cable.disconnect();
  }

  formatTimestamp(dateTime) {
    let today = new Date();
    let dateCreated;
    let result = '';
    let yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date); 
    let time;

    if (dateTime) {
      dateCreated = new Date(dateTime);
  
      if (today.toLocaleDateString() === dateCreated.toLocaleDateString()) {
        result = 'Today at '
      } else if (dateCreated > yesterday) {
        result = 'Yesterday at '
      } else {
        result = datedCreated.toLocaleDateString()
      }
  
      time = dateCreated.toLocaleTimeString();
      return result + time;
    } 
    
  }

  render() {
    console.log('state messages', this.state.messages);
    console.log('props messages', this.props.messages);

    const messageList = this.state.messages.map(message => {
      return(
        <div key={message.id}>
          <li id="message-list-items">
            { message.body }
            { message.authorId }
            { this.formatTimestamp(message.timestamp) }
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