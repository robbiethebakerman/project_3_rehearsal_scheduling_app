import React from 'react';



const Member = (props) =>{

  function handleClick(event){
   event.preventDefault();
   console.log(event);
   props.handleEditClick(props.member.id);
 }

  return(
    <div className="component">
    <li className="name">{props.member.name} <button onClick={handleClick}>Edit</button></li>
    </div>
  )

}



export default Member;
