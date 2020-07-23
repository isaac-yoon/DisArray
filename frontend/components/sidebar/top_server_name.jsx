import React from 'react';

const TopServerName = (props) => {
  const { openModal } = props;
  
  return (
      <div className="side-bar-server-name">
        <div>
          { props.servers[props.match.params.server_id] ? props.servers[props.match.params.server_id].name.toUpperCase() : null }
        </div>
        <label id="server-name-dropdown" onClick={() => openModal('edit-server')}>⌄</label>
      </div> 
  )
};

export default TopServerName;