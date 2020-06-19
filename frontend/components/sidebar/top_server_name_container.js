import { connect } from 'react-redux';
import TopServerName from './top_server_name';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers
  }
}

export default withRouter(connect(mapStateToProps, null)(TopServerName));