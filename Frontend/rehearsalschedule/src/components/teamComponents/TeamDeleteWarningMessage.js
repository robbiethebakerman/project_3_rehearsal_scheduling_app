import React from 'react';

const TeamDeleteWarningMessage = (props) => {

    const handleDelete = function() {
        props.handleDeleteConfirm(props.team.id);
    };

    const handleReject = function() {
        props.handleDeleteReject();
    };

    return (
        <div className="delete-warning-message">
            <p>Careful!</p>
            <p>Deleting a team deletes all related members!</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={handleReject}>No, don't delete!</button>
        </div>
    )

};

export default TeamDeleteWarningMessage;
