import { connect } from 'react-redux';
import MemberList from './member_list';
import { getServers } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    allUsers: Object.values(state.entities.users),
    server: state.entities.servers[ownProps.match.params.serverId],
    // grab all potential members from users slice of state and put it into an array
    // grab all servers
    // use the servers slice of state and also serverId to key into the appropriate server
    // to access all of the memberIds
  }
};

export default connect(mapStateToProps, null)(MemberList);