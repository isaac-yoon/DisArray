import React from 'react';


const WelcomeImage = (props) => {

  return (
    <div className="welcome-image-container">

      <img
        alt="smallbox"
        src={window.smallbox}
        className="welcome-image-small-box"
      />

      <img
        alt="desktop"
        src={window.desktop}
        className="welcome-image-desktop"
      />

      <img
        alt="android"
        src={window.android}
        className="welcome-image-android"
      />

      <img
        alt="iphone"
        src={window.iphone}
        className="welcome-image-iphone"
      />

      <img
        alt="gamecontroller"
        src={window.gamecontroller}
        className="welcome-image-gamecontroller"
      />

      <div className="laptop-headphones-parent">
        <div className="laptop-headphones-child">
          <img
            alt="laptop"
            src={window.laptop}
            className="welcome-image-laptop"
          />
          <img
            alt="headphones"
            src={window.headphones}
            className="welcome-image-headphones"
          />        
        </div>
      </div>

    </div>
  )

}

export default WelcomeImage;