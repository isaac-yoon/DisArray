import { connect } from 'react-redux';
import ChannelName from './channel_name';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    channels: state.entities.channels
  }
};


export default withRouter(connect(mapStateToProps, null)(ChannelName));