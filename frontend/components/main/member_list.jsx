import React from 'react';

const MemberList = (props) => {
  

  const memberList = props.members.map((member) => {
    return(
      <div key={member.id}>
        <li>
          { member.username }
        </li>
      </div>
    )
  });

  return (
    <div>
      <div>
        Server Members
      </div>
      <div>
        { memberList }
      </div>
    </div>
  )
};

export default MemberList;