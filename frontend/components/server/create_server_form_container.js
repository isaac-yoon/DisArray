import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateServerForm from './create_server_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  createServer: (server) => dispatch(createServer(server)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm);