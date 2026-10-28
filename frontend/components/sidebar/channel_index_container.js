import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { getChannels } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
// import { LOGOUT_CURRENT_USER, logoutCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    channels: Object.values(state.entities.channels)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getChannels: (serverId) => dispatch(getChannels(serverId)),
    openModal: modal => dispatch(openModal(modal)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndex))