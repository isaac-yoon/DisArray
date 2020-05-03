import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { getServers, receiveServers } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getServers: () => dispatch(getServers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)