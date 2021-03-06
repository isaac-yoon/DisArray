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
        alt="bomb"
        src={window.bomb}
        id="welcome-image-bomb"
        className="floating"
      />

      <img
        alt="coin"
        src={window.coin}
        id="welcome-image-coin-1"
        className="floating2"
      />

      <img
        alt="coin"
        src={window.coin}
        id="welcome-image-coin-2"
        className="floating"
      />

      <img
        alt="potion"
        src={window.potion}
        id="welcome-image-potion"
      />

      <img
        alt="gamepack"
        src={window.gamepack}
        id="welcome-image-gamepack"
        className="floating2"
      />

      <img
        alt="disc"
        src={window.disc}
        id="welcome-image-disc"
      />

      <img
        alt="x"
        src={window.xicon}
        id="welcome-image-x-1"
      />

      <img
        alt="x"
        src={window.xicon}
        id="welcome-image-x-2"
      />

      <img
        alt="triangle"
        src={window.triangle}
        id="welcome-image-triangle-1"
      />

      <img
        alt="triangle"
        src={window.triangle}
        id="welcome-image-triangle-2"
      />

      <img
        alt="square"
        src={window.square}
        id="welcome-image-square-1"
      />

      <img
        alt="square"
        src={window.square}
        id="welcome-image-square-2"
      />

      <img
        alt="square"
        src={window.square}
        id="welcome-image-square-3"
      />

      <img
        alt="circle"
        src={window.circle}
        id="welcome-image-circle-1"
      />

      <img
        alt="circle"
        src={window.circle}
        id="welcome-image-circle-2"
      />

      <img
        alt="circle"
        src={window.circle}
        id="welcome-image-circle-3"
      />

      <img
        alt="circlefill"
        src={window.circlefill}
        id="welcome-image-circlefill-1"
      />
      
      <img
        alt="circlefill"
        src={window.circlefill}
        id="welcome-image-circlefill-2"
      />

      <img
        alt="circlefill"
        src={window.circlefill}
        id="welcome-image-circlefill-3"
      />

      <img
        alt="circlefill"
        src={window.circlefill}
        id="welcome-image-circlefill-4"
      />

      <img
        alt="circlefill"
        src={window.circlefill}
        id="welcome-image-circlefill-5"
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