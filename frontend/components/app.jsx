import React from 'react';
import WelcomeNavBarContainer from "./welcome_nav_bar/welcome_nav_bar_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      < WelcomeNavBarContainer />
    </header>

    <main>
      <div className = "welcome-message-container">
        <h1
          className = "welcome-message"
          id = "welcome-message-1"
        >
          A new way to chat with your communities and friends.
        </h1>

        <p 
          className="welcome-message"
          id = "welcome-message-2"
        >
          Disarray is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.
        </p>
      </div>

    </main>

    <footer>

      
    </footer>

    {/* < ProtectedRoute path="/" component = {} />   */}
  </div>
);

export default App;