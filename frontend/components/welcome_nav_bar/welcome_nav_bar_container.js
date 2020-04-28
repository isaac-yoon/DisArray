import { connect } from 'react-redux';
import Welcome from './welcome_nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
})

const WelcomeNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);
export default WelcomeNavBarContainer;