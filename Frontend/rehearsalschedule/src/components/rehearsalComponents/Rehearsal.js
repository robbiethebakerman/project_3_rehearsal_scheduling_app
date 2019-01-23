import React from 'react';
import {Link} from 'react-router-dom';

const Rehearsal = (props) =>{

  const{id, name, startTime, endTime, project} = props.rehearsal;

  const handleEditClick = function(event){
   event.preventDefault();
   console.log(event);
   props.handleEditClick(props.rehearsal.id);
 }

 const handleDeleteClick = function(event){
   console.log("props.rehearsal", props.rehearsal);
   props.handleDeleteClick(props.rehearsal);
 };

  return(
    <div className="component">
    <li className="name">{props.rehearsal.name}
    <button onClick={handleEditClick}>Edit</button>
    <button onClick={handleDeleteClick}>Delete Rehearsal</button>
    </li>
    </div>
  )

};



export default Rehearsal;
