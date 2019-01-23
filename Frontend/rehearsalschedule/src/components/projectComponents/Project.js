import React from 'react';
import {Link} from 'react-router-dom';
import ProjectDeleteButton from './ProjectDeleteButton';

const Project = (props) =>{

  const{id, name, startDate, endDate} = props.project;
  return (
      <div className="component">
        <p className="name">
          <Link to={`/calendar/projects/${id}/rehearsals`} className="name">
            {name}
          </Link>
        </p>
        <p> Start Date: {startDate.slice(0, -18)}</p>
        <p> End Date: {endDate.slice(0, -18)}</p>
        <ProjectDeleteButton project={props.project} handleDeleteClick={props.handleDeleteClick}/>
      </div>
  )
}

export default Project;
