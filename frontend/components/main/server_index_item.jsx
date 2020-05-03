import React from 'react';
import {Link} from 'react-router-dom';

const ServerIndexItem = ({server}) => {
  return(
      <Link to = {`/channels/@me/${server.id}`}>
        <div className="server-index-item">
          { server.name[0] }
        <br/>
        </div>
      </Link>
  )
}

export default ServerIndexItem;