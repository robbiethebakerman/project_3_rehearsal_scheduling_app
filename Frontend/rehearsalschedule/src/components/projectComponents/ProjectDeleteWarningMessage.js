import React from 'react';

const ProjectDeleteWarningMessage = (props) => {

    const handleDelete = function() {
        props.handleDeleteConfirm(props.project.id);
    };

    const handleReject = function() {
        props.handleDeleteReject();
    };

    return (
        <div className="ProjectDelete">
            <p>Careful!</p>
            <p>Deleting a project deletes all related tasks, rehearsals and members!</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={handleReject}>No, don't delete!</button>
        </div>
    )


};

export default ProjectDeleteWarningMessage;
