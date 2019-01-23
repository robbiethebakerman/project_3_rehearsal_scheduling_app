import React from 'react';



const Team = (props) =>{

  function handleClick(event){
   event.preventDefault();
   console.log(event);
   props.handleEditClick(props.team.id);
 }

  return(
    <div className="component">
    <li className="name">{props.team.name} <button onClick={handleClick}>Edit</button></li>
    </div>
  )

}



export default Team;
