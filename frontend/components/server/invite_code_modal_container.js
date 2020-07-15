import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import InviteCodeModal from './invite_code_modal';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch((closeModal())),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InviteCodeModal);