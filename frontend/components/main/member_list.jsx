import React from 'react';

const MemberList = (props) => {
  debugger
  return (
    <div>
      {/* format members so that every member is on a separate line */}
      { props.members.length > 0 ? props.members.map((member) => member.username ) : null }
    </div>
  )
};

export default MemberList;