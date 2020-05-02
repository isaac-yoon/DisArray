import React from 'react';
import {Link} from 'react-router-dom';

const ServerIndexItem = ({server}) => {
  return(
    <div className="server-index-item">
      {/* <Link to= > */}
        { server.name[0] }
      {/* </Link> */}
      <br/>
    </div>
  )
}

export default ServerIndexItem;