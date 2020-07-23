import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import InviteCodeModal from './invite_code_modal';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    servers: state.entities.servers,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch((closeModal())),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InviteCodeModal));