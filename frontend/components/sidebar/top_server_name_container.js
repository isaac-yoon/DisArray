import { connect } from 'react-redux';
import TopServerName from './top_server_name';
import { getChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    serverNames: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getChannels: (serverId) => dispatch(getChannels(serverId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopServerName))