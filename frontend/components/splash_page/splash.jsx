import React from 'react';
import WelcomeNavBarContainer from "./welcome_nav_bar_container";
import WelcomeMessage from './welcome_message';
import WelcomeImage from './welcome_image';
import SplashNavBar from './splash_nav_bar';

const Splash = (props) => {
  return(
    <div className="splash">
      < SplashNavBar />
      < WelcomeMessage />
      < WelcomeNavBarContainer />
      < WelcomeImage />
    </div>
  )
}

export default Splash;