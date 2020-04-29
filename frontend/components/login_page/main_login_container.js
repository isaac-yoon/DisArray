import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './main_login_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);