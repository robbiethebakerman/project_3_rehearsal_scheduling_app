import React from 'react';

const NewTeamForm = (props) =>{

  const options = props.projects.map((project, index) =>{
    return <option key={project.id} value={project._links.self.href}>{project.name}</option>
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
    <form action="/button-type" onSubmit={handleSubmit}>
    <p>Create a team</p>
    <input type="text" placeholder="Name" name="name" />
    <select name="project">
    <option value="" disabled selected>Select a Project</option>
    {options}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default NewTeamForm;
