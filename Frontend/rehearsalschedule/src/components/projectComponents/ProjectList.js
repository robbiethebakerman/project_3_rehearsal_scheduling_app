import React from 'react';
import Project from './Project.js';

const ProjectList = (props) =>{

  const projects = props.projects.map((project) =>{
    return(
      <li key={project.id} className="component-item">
        <Project project={project} handleDeleteClick={props.handleDeleteClick} />
      </li>
    )
  })

  return(
    <ul className="component-list">
    {projects}
    </ul>
  )
};

export default ProjectList;
