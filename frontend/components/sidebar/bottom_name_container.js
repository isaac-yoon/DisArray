import { connect } from 'react-redux';
import SideBarBottom from './bottom_name';
import { logout } from '../../actions/session_actions';
// import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarBottom);