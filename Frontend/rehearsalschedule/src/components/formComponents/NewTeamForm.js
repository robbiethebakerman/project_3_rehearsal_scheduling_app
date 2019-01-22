import React from 'react';

const NewTeamForm = (props) =>{

  const options = props.projects.map((project, index) =>{
    return <option key={project.id}>{project.name}</option>
  })

  function handleSubmit(event){
    event.preventDefault();
    const team = {
      "name": event.target.name.value,
      "project": event.target.project.value,
    }
    props.handleTeamPost(team);
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name" />
    <select name="project">
    {options}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default NewTeamForm;
