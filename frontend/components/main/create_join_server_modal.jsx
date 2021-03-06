import React from 'react';

const CreateJoinServerModal = (props) => {
  const { openModal } = props;

  return(
    <div className = "create-join-server-modal">
      <div id ="create-join-server-modal-header-text">Oh, another server huh?</div>
      <div className = "create-join-server-modal-options-container">
        <div id = "create-join-actions-container">
          <div className = "actions-links" id = "create-server-link" onClick = {() => openModal('create-server')}>
            <b>Create</b> a new server and invite your friends. It's free!
            <img 
              alt="create server icon" 
              src={window.createServerIcon}
              className="action-links-icons"
            />
            <button className="action-link-button" id="create-action-link">Create a server</button>
          </div>

          <div className = "actions-links" id = "join-server-link" onClick = {() => openModal('join-server')}>
            <b>Join</b> a server with an invite code or link.
            <img 
              src={window.joinServerIcon}
              alt="join server icon" 
              className="action-links-icons"
            />
            <button className = "action-link-button" id="join-action-link">Join a server</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreateJoinServerModal;