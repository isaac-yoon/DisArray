import React from 'react';
import {Link} from 'react-router-dom';

const SplashFooter = () => {
  return (
    <div className="splash-footer">
      <div>
      </div>
      
      <div className="splash-footer-welcome-messages">
        <h2 id="splash-footer-message-1">Ready to try DisArray? It's free!</h2>
        <br/>
        <h3 id="splash-footer-message-2">JOIN OVER 5 USERS TODAY!</h3>
        <h6>DisArray is a clone inspired by Discord.</h6>
      </div>

      <div className="splash-footer-signup-link">
        <Link to="/register">
          SIGN UP
        </Link>
      </div>
    </div>
  )
}

export default SplashFooter;