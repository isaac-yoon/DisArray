import { connect } from 'react-redux';
import MemberList from './member_list';

const mapStateToProps = (state, ownProps) => {
  return {
    members: Object.values(state.entities.users),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);