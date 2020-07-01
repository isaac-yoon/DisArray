import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';
import CreateChannelForm from './create_channel_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChannelForm));