import React from 'react';
import {Link} from 'react-router-dom';

const Member = (props) =>{

const{id, name, email, team} = props.member;

  const handleEditClick = function(event){
   event.preventDefault();
   console.log(event);
   props.handleEditClick(props.member.id);
 }

 const handleDeleteClick = function(event){
   props.handleDeleteClick(props.member);
 };
 
  return(
    <div className="component">
    <li className="name">{props.member.name}
    <button onClick={handleEditClick}>Edit</button>
    <button onClick={handleDeleteClick}>Delete Member</button>
    </li>
    </div>
  )

};



export default Member;
