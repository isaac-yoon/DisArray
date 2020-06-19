import React from 'react';

const TopServerName = (props) => {
  return (
      <div className="side-bar-server-name">
        { props.servers[props.match.params.server_id] ? props.servers[props.match.params.server_id].name.toUpperCase() : null }
      </div> 
  )
};

export default TopServerName;