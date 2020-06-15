import { connect } from 'react-redux';
import { joinServer, leaveServer } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';
import JoinServerForm from './join_server_form';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  joinServer: (inviteCode) => dispatch(joinServer(inviteCode)),
  leaveServer: (serverId) => dispatch(leaveServer(serverId)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinServerForm);