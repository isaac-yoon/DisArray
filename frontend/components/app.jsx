import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../modal/modal';
import { Switch, Redirect, Route } from 'react-router-dom';

import MainNavBar from './splash_page/main_nav_bar';
import MainLoginFormContainer from './login_page/main_login_container';
import Splash from './splash_page/splash';
import Main from './main/main_app';
const App = () => (
  <div>
    <Modal />
    
    <Switch>
      <AuthRoute exact path="/login" component = { MainLoginFormContainer } />
      <ProtectedRoute exact path="/channels/@me" component= { Main } />
      <Route exact path="/" component= {Splash} />
      <Route path="/" component={MainNavBar} />
      <Redirect path = "/" to="/" />
    </Switch>

  </div>
);

export default App;