import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { CreateJoinServerModal } from './create_join_server_modal';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors
  }
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch((openModal())),
    closeModal: () => dispatch((closeModal())),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateJoinServerModal);