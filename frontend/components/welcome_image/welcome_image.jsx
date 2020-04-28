import React from 'react';


const WelcomeImage = (props) => {

  return (
    <div className="welcome-image-container">
      <img
        alt="smallbox"
        src="/assets/mariobox.svg"
        className="welcome-image-small-box"
      />
      <img
        alt="desktop"
        src="/assets/desktop.svg"
        className="welcome-image-desktop"
      />
      <img
        alt="android"
        src="/assets/android.svg"
        className="welcome-image-android"
      />
      <img
        alt="iphone"
        src="/assets/iphone.svg"
        className="welcome-image-iphone"
      />
      <img
        alt="gamecontroller"
        src="/assets/gamecontroller.svg"
        className="welcome-image-gamecontroller"
      />
      <div className="laptop-headphones-parent">
        <div className="laptop-headphones-child">
          <img
            alt="laptop"
            src="/assets/laptop.svg"
            className="welcome-image-laptop"
          />
          <img
            alt="headphones"
            src="/assets/headphones.svg"
            className="welcome-image-headphones"
          />        
        </div>
      </div>
    </div>
  )

}

export default WelcomeImage;