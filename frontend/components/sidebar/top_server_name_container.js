import { connect } from 'react-redux';
import TopServerName from './top_server_name';
import { getServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // getServer: (serverId) => dispatch(getServer(serverId))
  }
}

export default withRouter(connect(mapStateToProps, null)(TopServerName));