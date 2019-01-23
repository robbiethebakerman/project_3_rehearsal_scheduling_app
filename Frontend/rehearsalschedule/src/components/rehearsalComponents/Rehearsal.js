import React from 'react';



const Rehearsal = (props) =>{

  function handleClick(event){
   event.preventDefault();
   console.log(event);
   props.handleEditClick(props.rehearsal.id);
 }

  return(
    <div className="component">
    <li className="name">{props.rehearsal.name} <button onClick={handleClick}>Edit</button></li>
    </div>
  )

}



export default Rehearsal;
