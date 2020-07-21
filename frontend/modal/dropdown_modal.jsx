import React from 'react';
import { openModal, closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import EditServerModalContainer from '../components/server/edit_server_modal';

import { withRouter } from 'react-router-dom';

function dropdownModal({ modal, closeModal, openModal, servers }) {
  if (!modal) {
    return null;
  }

  let component;
  
  switch (modal) {
    case 'edit-server':
      component = <div className="modal-child-edit-server-modal" onClick={e => e.stopPropagation()}><ProtectedRoute path="/channels/@me/:serverId" component = { EditServerModalContainer } servers = {servers} /></div>;
      // note: using ProtectedRoute here to have the serverId as a wildcard for the component
      // how to pass in servers as a prop to EditServerModalContainer?
      
      // component = <div className="modal-child-edit-server-modal" onClick={e => e.stopPropagation()}> < EditServerModalContainer servers = {servers} /></div>;
      // if done this way, how to get :serverId as a wildcard?
      break;
    default:
      return null;
  }

  return (
    <div className="dropdown-modal-background" onClick={closeModal}>
      { component }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    servers: state.entities.servers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(dropdownModal));