import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import DemoLoginFormContainer from '../components/session/demo_login_form_container';
import CreateServerFormContainer from '../components/server/create_server_form_container';
import CreateChannelFormContainer from '../components/channel/create_channel_form_container';
import EditChannelFormContainer from '../components/channel/edit_channel_form_container';
import JoinServerFormContainer from '../components/server/join_server_form_container';
import CreateJoinServerModalContainer from '../components/main/create_join_server_modal_container';
import EditServerModalContainer from '../components/server/edit_server_modal_container';

import { withRouter } from 'react-router-dom';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  
  let component;

  switch (modal) {
    case 'login':
      component = <div className="modal-child" onClick={e => e.stopPropagation()}><LoginFormContainer /></div>;
      break;
    case 'signup':
      component = <div className="modal-child" onClick={e => e.stopPropagation()}><SignupFormContainer /></div>;
      break;
    case 'demo-login':
      component = <div className="modal-child" onClick={e => e.stopPropagation()}><DemoLoginFormContainer /></div>;
      break;
    case 'create-server':
      component = <div className = "modal-child-create-server-form" onClick={e => e.stopPropagation()}><CreateServerFormContainer /></div>;
      break;
    case 'create-channel':
      component = <div className="modal-child-create-channel-form" onClick={e => e.stopPropagation()}><CreateChannelFormContainer /></div>;
      break;
    case 'edit-channel':
      component = <div className="modal-child-edit-channel-form" onClick={e => e.stopPropagation()}><EditChannelFormContainer /></div>;
      break;
    case 'join-server':
      component = <div className="modal-child-join-server-form" onClick={e => e.stopPropagation()}><JoinServerFormContainer /></div>;
      break;
    case 'create-join-server':
      component = <div className="modal-child-create-join-server-modal" onClick={e => e.stopPropagation()}><CreateJoinServerModalContainer /></div>;
      break;
    case 'edit-server':
      component = <div className="modal-child-edit-server-modal" onClick={e => e.stopPropagation()}><EditServerModalContainer /></div>;
      break;
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onClick={closeModal}>
      {component}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));