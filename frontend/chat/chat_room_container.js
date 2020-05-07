import { connect } from 'react-redux';
import ChatRoom from './chat_room';
// import { logout } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    messages: state.channelMessages,
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   logout: () => dispatch(logout()),
//   openModal: modal => dispatch(openModal(modal))
// })

export default connect(mapStateToProps, null)(ChatRoom);