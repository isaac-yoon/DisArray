import React from 'react';
import MessageForm from './message_form';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      channelId: props.location.pathname.split('/')[4] || '',
    }

    this.bottom = React.createRef();
  }

  componentDidMount() {
    const { fetchChannelMessages, createChannelMessage } = this.props;
    
    App.cable.subscriptions.create(
      {
        // this needs to match chat_channel.rb
        channel: "ChatChannel",
        channelId: this.state.channelId,
      },
      {
        received: data => {
          switch (data.type) {
            case 'message':
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
              break;
              }
            },
            // received will be invoked when the subscription broadcasts from the backend
            speak: function (data) {
              return this.perform("speak", data)
            },
            // load: function() { 
            //   return this.perform("load") 
            // }
            // performs the speak method in the backend while passing in some data
          }
          );

    fetchChannelMessages();
  }

  // loadChat(e) {
  //   App.cable.subscriptions.subscriptions[0].load();
  // }

  componentDidUpdate(prevProps) {
    if (this.bottom.current !== null) this.bottom.current.scrollIntoView();

    // if the URL changes

    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState(
        {messages: [], channelId: this.props.location.pathname.split('/')[4] || ''},
        () => {
          // unsubscribe to channel if the pathname changes
          App.cable.disconnect()
          App.cable.subscriptions.create(
            {
              channel: "ChatChannel",
              channelId: this.state.channelId,
            },
            // this needs to match chat_channel.rb
            {
              received: data => {
                switch (data.type) {
                  case 'message':
                    this.setState({
                      messages: this.state.messages.concat(data.message)
                    });
                    break;
                }
              },
              // received will be invoked when the subscription broadcasts from the backend
              speak: function (data) {
                return this.perform("speak", data)
              },
              load: function () {
                return this.perform("load")
              }
              // performs the speak method in the backend while passing in some data
            }
          );
        }
      )
    }
  }

  componentWillUnmount() {
    App.cable.disconnect();
  }

  // maybe add a componentWillUnmount 

  render() {
    const { currentUser } = this.props;

    const messageList = this.state.messages.map(message => {
      return(
        <div key={message.id}>
          <li id="message-list-items">
            {/* {currentUser.username ? currentUser.username : null } : {message} */}
            { message }
          </li>
          <div id="channel-message-bottom" ref={this.bottom} />

        </div>
      )
    });

    return (
      <div className="chatroom-container">

        <div className="message-list">{messageList}</div>
        
        <MessageForm channelId = {this.state.channelId} />
      </div>
    )
  }
}

export default ChatRoom;