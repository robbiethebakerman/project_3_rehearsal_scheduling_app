import React from 'react';
import {Link} from 'react-router-dom';

const Project = (props) =>{

  const{id, name, startDate, endDate} = props.project;

  const handleClick = function() {
    props.handleDeleteClick(props.project);
  };

  function handleEditClick(event){
   event.preventDefault();
   console.log(event);
   props.handleEditClick(props.project.id);
 }

  return (
      <div className="component">
        <p className="name">
          <Link to={`/calendar/projects/${id}/rehearsals`} className="name">
            {name}
          </Link>
        </p>
        <p> Start Date: {startDate.slice(0, -18)}</p>
        <p> End Date: {endDate.slice(0, -18)}</p>
          <Link to={`/projects/${id}/tasks`}>
              View all tasks for this project
          </Link>
          <br/>
          <Link to={`/projects/${id}/teams`}>
              View all teams for this project
          </Link>
          <br/>
          <Link to={`/projects/${id}/members`}>
              View all members for this project
          </Link>
          <br/>
          <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleClick}>Delete Project</button>
      </div>
  )
};

export default Project;
