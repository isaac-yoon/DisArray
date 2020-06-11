import { connect } from 'react-redux';
import ChatRoom from './chat_room';
import {
  fetchChannelMessages,
  createChannelMessage
} from '../actions/channel_message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    messages: state.channelMessages,
  }
}

const mapDispatchToProps = (dispatch) => ({
  // createChannelMessage: (message) => dispatch(createChannelMessage(message)),
  fetchChannelMessages: (messages) => dispatch(fetchChannelMessages(messages))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatRoom));