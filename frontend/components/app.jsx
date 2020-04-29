import React from 'react';
import WelcomeNavBarContainer from "./welcome_nav_bar/welcome_nav_bar_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../modal/modal';
import { Switch, Redirect, Route } from 'react-router-dom';
import WelcomeMessage from './welcome_message/welcome_message';
import WelcomeImage from './welcome_image/welcome_image';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    <Modal />
    <WelcomeNavBarContainer />

    {/* < ProtectedRoute exact path="/" component= { WelcomeNavBarContainer } /> */}
      < AuthRoute exact path="/" component = { WelcomeMessage } />
      < AuthRoute exact path="/" component = { WelcomeImage } />
    

    <Switch>
      <AuthRoute path="/login" component = { LoginFormContainer } />
      <Route exact path="/" component= {null} />
      <Redirect path = "/" to="/" />

    </Switch>

    {/* 
    If you want to redirect to your / page, then use exact path / to render a null component
    right below it, you can use path / to redirect to your home page
    
     */}
  </div>
);

export default App;