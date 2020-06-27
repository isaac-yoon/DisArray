import React from 'react';

class MemberList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    }
  }

  componentWillUnmount() {
    this.setState({
      members: [],
    })
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
      <div>
        <div>
          Server Members
        </div>
        <div>
          { membersList }
        </div>
      </div>
    )
  }
};  

export default MemberList;