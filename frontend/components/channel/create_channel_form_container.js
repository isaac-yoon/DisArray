import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actinos';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateChannelForm from './create_server_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  createChannel: (channel) => dispatch(createChannel(channel)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelForm);