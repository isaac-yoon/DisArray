import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditServerModal from './edit_server_modal';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    inviteCode: state.entities.servers[ownProps.match.params.serverId].inviteCode,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch((openModal(modal))),
    closeModal: () => dispatch((closeModal())),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditServerModal));