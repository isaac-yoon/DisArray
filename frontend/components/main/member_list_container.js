import { connect } from 'react-redux';
import MemberList from './member_list';

const mapStateToProps = (state, ownProps) => {
  return {
    // add a selector that selects members based on memberIds and if it matches the servermemberships table
    members: Object.values(state.entities.users),
  }
};

export default connect(mapStateToProps, null)(MemberList);