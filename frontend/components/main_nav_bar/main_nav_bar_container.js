import { connect } from 'react-redux';
import MainNavBar from './main_nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  // to be added
  // servers: state.entities.servers
})

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),

  // to be added
  // addServer: server => dispatch()
})

const MainNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
export default MainNavBarContainer;