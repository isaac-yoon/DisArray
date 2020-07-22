import React from 'react';

const EditServerModal = (props) => {
  const { openModal } = props;

  return(
    <div className="edit-server-modal">
      <div className="edit-server-option" onClick={() => openModal('dropdown-invite-code')}>Invite Friends</div>
      <div className="edit-server-option">Edit Server</div>
      <div className="edit-server-option">Delete Server</div>
    </div>
  )
}

export default EditServerModal;