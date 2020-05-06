import { connect } from 'react-redux';
import { editChannel } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditChannelForm from './edit_channel_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => {
  return {
    editChannel: (channel) => dispatch(editChannel(channel)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditChannelForm));