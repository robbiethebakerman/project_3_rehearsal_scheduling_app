import React from 'react';

const Task = (props) =>{

    function handleEditClick(event){
        event.preventDefault();
        props.handleEditClick(props.task.id);
    }

    const handleDeleteClick = function() {
        props.handleDeleteClick(props.task);
    };

    return(
        <div className="component">
            <li className="name">
                <p>{props.task.name}</p>
                <button onClick={handleEditClick}>Edit Task</button>
                <button onClick={handleDeleteClick}>Delete Task</button>
            </li>
        </div>
    );

};

export default Task;
