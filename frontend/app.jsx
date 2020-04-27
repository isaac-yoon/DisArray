import React from 'react';
import WelcomeContainer from "./components/welcome/welcome_container";
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import { AuthRoute, ProtectedRoute } from './util/route_util';

const App = () => (
  <div>
    <header>
      <h1 className="welcome-message">DisArray</h1>
      < WelcomeContainer />
    </header>

    < AuthRoute exact path="/login" component = { LoginFormContainer } />
    < AuthRoute exact path="/signup" component = { SignupFormContainer } />
    {/* < ProtectedRoute path="/" component = {  } />   */}
  </div>
);

export default App;