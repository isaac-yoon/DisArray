import React from 'react';

class MemberList extends React.Component {
  constructor(props) {
    super(props);

  // need to filter all users with serverId
  // state.entities.servers[serverId].memberIds = array of memberIds
  // iterate through all memberIds and all users in users slice of state
  // grab all users and put it into member list
  }

  render() {
    const memberList = this.props.members.map((member) => {
      return(
        <div key={member.id}>
          <li> { member.username }</li>
        </div>
      )
    });

    return (
      <div>
        <div>
          Server Members
        </div>
        <div>
          { memberList }
        </div>
      </div>
    )
  }
};  

export default MemberList;