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
    <h1>Create a team</h1>
    <label for="name">Enter team name:</label>
    <input type="text" id="name" name="name" />
    <p></p>
    <select name="project">
    <option value="" disabled selected>Select a Project</option>
    {options}
    </select>
    <p></p>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default NewTeamForm;
