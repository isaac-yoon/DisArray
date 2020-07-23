import React from 'react';

const EditServerModal = (props) => {
  const { openModal } = props;

  return(
    <div className="edit-server-modal">
      <div className="edit-server-option" onClick={() => openModal('dropdown-invite-code')}>Invite Friends</div>
      <div className="edit-server-option">Edit Server (in progress)</div>
      <div className="edit-server-option">Delete Server (in progress)</div>
    </div>
  )
}

export default EditServerModal;