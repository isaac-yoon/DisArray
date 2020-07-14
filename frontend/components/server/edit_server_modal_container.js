import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditServerModal from './edit_server_modal';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors
  }
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch((openModal(modal))),
    closeModal: () => dispatch((closeModal())),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditServerModal);