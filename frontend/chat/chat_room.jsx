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
    this.createActionCableSubscription = this.createActionCableSubscription.bind(this);
  }

  componentDidMount() { 
    this.createActionCableSubscription(this.props.match.params.channelId);
  }

  createActionCableSubscription(channelId) {
    App.seek = App.cable.subscriptions.create(
      {
        // this needs to match chat_channel.rb
        channel: "ChatChannel",
        channelId: channelId,
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

    if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
      App.cable.disconnect();
      App.seek.unsubscribe();
      delete App.seek
      this.createActionCableSubscription(this.props.match.params.channelId);
      this.props.fetchChannelMessages()
        .then(() => this.setState({
            messages: filterChannelMessages(this.props.messages, this.props.match.params.channelId)
        }));
    }
  }

  componentWillUnmount() {
    App.cable.disconnect();
    App.seek.unsubscribe();
    delete App.seek
  }

  formatTimestamp(dateTime) {
    let today = new Date();
    let result = '';
    let yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date); 
    let time;

    if (dateTime !== null || dateTime !== undefined) {
      let dateCreated = new Date(dateTime);
  
      if (today.toLocaleDateString() === dateCreated.toLocaleDateString()) {
        result = 'Today at '
      } else if (dateCreated > yesterday) {
        result = 'Yesterday at '
      } else {
        result = dateCreated.toLocaleDateString()
      }
  
      time = dateCreated.toLocaleTimeString();
      return result + '   ' + time;
    } 
  }

  render() {
    const { allUsers } = this.props;
    const messageList = this.state.messages.map(message => {
      return(
        <div key={message.id}>
          <li id="message-list-items">
            <div className="message-container">
              <div className="message-username-timestamp-container">
                <div id="message-username"> { allUsers[message.authorId].username ? allUsers[message.authorId].username : null } </div>
                <div id="message-timestamp"> {this.formatTimestamp(message.createdAt)}</div>
              </div>
              <div id="message-body"> { message.body }</div>
            </div>
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