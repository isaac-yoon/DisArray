import React from 'react';


const WelcomeMessage = (props) => {

  return (
    <main>
      <div className="welcome-message-container">
        <h1
          className="welcome-message"
          id="welcome-message-1"
        >
          A new way to chat with your communities and friends.
          </h1>

        <p
          className="welcome-message"
          id="welcome-message-2"
        >
          Disarray is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, 
        <br/>
          a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.
        </p>
      </div>

    </main>
  )

}

export default WelcomeMessage;