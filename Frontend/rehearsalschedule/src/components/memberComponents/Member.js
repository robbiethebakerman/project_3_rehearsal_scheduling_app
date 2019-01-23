import React from 'react';



const Member = (props) =>{

  return(
    <div className="component">
    <li className="name">{props.member.name}</li>
    </div>
  )

}



export default Member;
