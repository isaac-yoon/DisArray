import React from 'react';
import TopServerNameContainer from './top_server_name_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Switch, Redirect, Route } from 'react-router-dom';

// import { Link } from 'react-router-dom';

class TopServerName extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   serverName: this.props.servers[this.props.match.params.server_id]
    // };
  }

  // componentDidMount() {
  //   if (this.props.match.params.server_id !== null || this.props.match.params.server_id !== undefined) {
  //     let serverName = this.props.getServer(this.props.match.params.server_id).name;
  //   }
  // }

  // componentDidUpdate(previousProps) {
  //   if (previousProps.match.params.server_id !== this.props.match.params.server_id && (this.props.match.params.server_id !== undefined || this.props.match.params.server_id !== null)) {
  //     serverName = this.props.getServer(this.props.match.params.server_id).name
  //   }
  // }

  render() {
    // const {servers} = this.props
    return (
      <div className="side-bar-server-name">
        { this.props.servers[this.props.match.params.server_id] ? this.props.servers[this.props.match.params.server_id].name.toUpperCase() : null }
      </div>
    )
  }
}

export default TopServerName;