import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { getServers } from '../../actions/server_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getServers: () => dispatch(getServers()),
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)