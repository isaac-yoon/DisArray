import React from 'react';
import {Link} from 'react-router-dom';

const ServerIndexItem = ({server}) => {
  return(
      <Link to = {`/channels/@me/${server.id}/`}>
        <div title={server.name} className="server-index-item tooltip">
          {/* <span className="tooltiptext">
            {server.name}
          </span> */}
          {server.photoUrl ? <img className="server-index-item" src={server.photoUrl}></img> : <div className="server-index-item">{server.name[0].toUpperCase()}</div> }
          <br/>
        </div>
      </Link>
  )
}

export default ServerIndexItem;