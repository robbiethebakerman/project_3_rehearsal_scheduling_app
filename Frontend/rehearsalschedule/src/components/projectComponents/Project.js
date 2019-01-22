import React from 'react';
import {Link} from 'react-router-dom';

const Project = (props) =>{

  const{id, name, startDate, endDate} = props.project;
  return (
    <div className="component">
    <p className="name">
    <Link to={"/projects/" + id} className="name">
    {name}
    </Link>
    </p>
    <p> Start Date: {startDate.slice(0, -18)}</p>
    <p> End Date: {endDate.slice(0, -18)}</p>
    </div>
  )
}

export default Project;
