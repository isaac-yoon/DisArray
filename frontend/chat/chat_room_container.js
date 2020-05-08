import { connect } from 'react-redux';
import ChatRoom from './chat_room';
// import { logout } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';
import {
  fetchChannelMessages,
  addChannelMessage
} from '../actions/channel_message_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    messages: state.channelMessages,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addChannelMessage: (message) => dispatch(addChannelMessage(message)),
  fetchChannelMessages: (messages) => dispatch(fetchChannelMessages(messages))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);