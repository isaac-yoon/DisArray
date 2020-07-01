import React from 'react';


// use local state to add all members of a particular server
// because we're using local state here, we need to reset the local state whenever the URL changes 
// or whenever the component is unmounted

class MemberList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.setState({
        members: [],
      })
    }
  }

  render() {
    const { server, allUsers } = this.props;

    // not sure this is the best place to hold this logic
    // think of other places where this logic can go

    allUsers.forEach((member) => {
      if (server) {
        server.memberIds.forEach((memberId) => {
          if (member.id === memberId && !this.state.members.includes(member)) {
            this.setState({
              members: this.state.members.concat(member)
            })
          }
        })
      }
    });

    const membersList = this.state.members.map((member) => {
      return(
        <div key={member.id}>
          <li>
            { member.username }
          </li>
        </div>
      )
    });

    return (
      <div className="member-list">
        <div>
          <ul id = "list-of-members">
            { membersList }
          </ul>
        </div>
      </div>
    )
  }
};  

export default MemberList;