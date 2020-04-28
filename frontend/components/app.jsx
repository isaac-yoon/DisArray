import React from 'react';
import WelcomeContainer from "./welcome/welcome_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <h1 className="welcome-message">DisArray</h1>
      < WelcomeContainer />
    </header>

    <main></main>

    <footer></footer>

    {/* < ProtectedRoute path="/" component = {} />   */}
  </div>
);

export default App;