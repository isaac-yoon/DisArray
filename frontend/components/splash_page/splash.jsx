import React from 'react';
import WelcomeNavBarContainer from "./welcome_nav_bar_container";
import WelcomeMessage from './welcome_message';
import WelcomeImage from './welcome_image';
import MainNavBar from './main_nav_bar';

const Splash = (props) => {
  return(
    <div className="splash">
      < MainNavBar />
      < WelcomeMessage />
      < WelcomeNavBarContainer />
      < WelcomeImage />
    </div>
  )
}

export default Splash;