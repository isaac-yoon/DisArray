import { connect } from 'react-redux';
import Welcome from './welcome';
import { logout } from '../../actions/session_actions';



const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);
export default WelcomeContainer;