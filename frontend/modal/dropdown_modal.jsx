import React from 'react';
import { openModal, closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import EditServerModalContainer from '../components/server/edit_server_modal';

import { withRouter } from 'react-router-dom';

function dropdownModal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case 'edit-server':
      component = <div className="modal-child-edit-server-modal" onClick={e => e.stopPropagation()}><ProtectedRoute path="/channels/@me/:serverId" component={EditServerModalContainer} /></div>;
      break;
    default:
      return null;
  }

  return (
    <div className="dropdown-modal-background" onClick={closeModal}>
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
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(dropdownModal));