import React from 'react';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import RegisterForm from './main_register';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  register: user => dispatch(signup(user)),
  clearErrors: () => dispatch(receiveErrors([])),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));