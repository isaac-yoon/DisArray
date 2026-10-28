import { connect } from 'react-redux';
import TopServerName from './top_server_name';
import { withRouter } from 'react-router-dom';

import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers
  }
};

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopServerName));