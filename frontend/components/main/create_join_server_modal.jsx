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
      <div>Oh, another server huh?</div>
      <div className = "create-join-server-modal-options-container">
        <div>Create a new server and invite your friends. It's free!</div>
        <div>Join a server with an invite code or link.</div>
      </div>
    </div>
  )
};

export default CreateJoinServerModal;