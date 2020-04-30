import React from 'react';

const ServerIndexItem = ({server}) => {
  return(
    <li className="server-index-item">
      name: { server.name }
      <br/>
    </li>
  )
}

export default ServerIndexItem;