import { connect } from 'react-redux';
import ChatRoom from './chat_room';
import { fetchChannelMessages } from '../actions/channel_message_actions';
import { allUsers } from '../reducers/selectors';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    messages: state.entities.channelMessages,
    allUsers: state.entities.users,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchChannelMessages: (messages) => dispatch(fetchChannelMessages(messages))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatRoom));