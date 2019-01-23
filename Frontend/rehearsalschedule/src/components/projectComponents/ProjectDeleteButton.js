import React from 'react';

const ProjectDeleteButton = (props) =>{

    // const{id, name, startDate, endDate} = props.project;

    const handleDelete = function() {
      props.handleDelete(props.project.id);
    };

    return (
        <button onClick={handleDelete}>Delete Project</button>
    )
};

export default ProjectDeleteButton;
