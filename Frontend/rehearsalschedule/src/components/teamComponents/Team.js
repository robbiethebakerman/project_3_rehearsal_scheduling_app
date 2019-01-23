import React from 'react';

const Team = (props) =>{

    function handleEditClick(event){
        event.preventDefault();
        props.handleEditClick(props.team.id);
    }

    const handleDeleteClick = function() {
        props.handleDeleteClick(props.team);
    };

    return(
        <div className="component">
            <li className="name">
                <p>{props.team.name}</p>
                <button onClick={handleEditClick}>Edit Team</button>
                <button onClick={handleDeleteClick}>Delete Team</button>
            </li>
        </div>
    )

};

export default Team;
