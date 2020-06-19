import React from 'react';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {

  componentDidMount() {
    this.props.getServers()
    this.props.fetchUsers();
    // possible optimization in the future, 
    // to not fetch all users but to fetch all of the current user's friends and server members ONLY
  }

  render() {
    return(
      <div className = "server-index-list">
        {this.props.servers.map((server) => (
          <ServerIndexItem key={server.id} server={server} />
        ))}
      </div>
    )
  }
};

export default ServerIndex;