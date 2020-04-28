import React from 'react';
import WelcomeNavBarContainer from "./welcome_nav_bar/welcome_nav_bar_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../modal/modal';
import Switch from 'react-router-dom';
import WelcomeMessage from './welcome_message/welcome_message';
import WelcomeImage from './welcome_image/welcome_image';


const App = () => (
  <div>
    <Modal />
    <WelcomeNavBarContainer />

    {/* < ProtectedRoute exact path="/" component= { WelcomeNavBarContainer } /> */}
    
    < AuthRoute exact path="/" component= { WelcomeMessage } />
    < AuthRoute exact path="/" component= { WelcomeImage } />

    {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
    {/* <Switch> */}

    {/* </Switch> */}
  </div>
);

export default App;