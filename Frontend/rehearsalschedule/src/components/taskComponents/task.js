import React from 'react';



const Task = (props) =>{

  return(
    <div className="component">
    <li className="name">{props.task.name}</li>
    </div>
  )

}



export default Task;
