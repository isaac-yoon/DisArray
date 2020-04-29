import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button onClick = { () => dispatch(openModal('login')) }>
      Login
    </button>
  ),
  clearErrors: () => dispatch(receiveErrors([])),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);