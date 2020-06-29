import React from 'react';

const CreateJoinServerModal = (props) => {

  // createServerClick() {
  //   e.preventDefault();
  //   // open create server modal
  //   // close CreateJoinServerModal
  // };

  // joinServerClick() {
  //   e.preventDefault();
  //   // open join server modal
  //   // close CreateJoinServerModal
  // };

  return(
    <div className = "create-join-server-modal">
      <div id ="create-join-server-modal-header-text">Oh, another server huh?</div>
      <div className = "create-join-server-modal-options-container">
        <div id = "create-join-actions-container">
          <div className = "actions-links" id = "create-server-link">
            Create a new server and invite your friends. It's free!
            {/* picture */}
            <div>Create a Server</div>
          </div>

          <div className = "actions-links" id = "join-server-link">
            Join a server with an invite code or link.
            {/* picture */}
            <div>Join a server</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreateJoinServerModal;