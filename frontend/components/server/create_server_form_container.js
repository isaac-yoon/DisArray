import { connect } from 'react-redux';
import { createServer, getServers } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';
import CreateServerForm from './create_server_form';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  createServer: (server) => dispatch(createServer(server)),
  getServers: () => dispatch(getServers()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm);