import React from 'react';
import Modal from '../modal/modal';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect, Route } from 'react-router-dom';

import Splash from './splash_page/splash';
import MainLoginFormContainer from './login_page/main_login_container';
import MainRegisterFormContainer from './register_page/main_register_page_container';
import Main from './main/main_app';

const App = () => (
  <div>
    <Modal />
    
    <Switch>
      <AuthRoute exact path="/" component= {Splash} />
      <AuthRoute exact path="/login" component = { MainLoginFormContainer } />
      <AuthRoute exact path="/register" component = { MainRegisterFormContainer } />
      <ProtectedRoute path="/channels/@me" component= { Main } />
      <Redirect path = "/" to = "/" />
    </Switch>

  </div>
);

export default App;