import React from 'react';



const Task = (props) =>{

 function handleClick(event){
  event.preventDefault();
  console.log(event);
  props.handleEditClick(props.task.id);
}

  return(
    <div className="component">
    <li className="name">{props.task.name} <button onClick={handleClick}>Edit</button> </li>
    </div>
  );

}



export default Task;
