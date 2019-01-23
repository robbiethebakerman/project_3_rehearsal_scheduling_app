import React from 'react';

const NewProjectForm = (props) =>{


  function handleSubmit(event){
    event.preventDefault();
    const project = {
      "name": event.target.name.value,
      "startDate": event.target.startDate.value,
      "endDate": event.target.endDate.value,
    }
    props.handleProjectPost(project);
  }

  return(
    <div>
    <h1>Create a Project</h1>
    <form onSubmit={handleSubmit}>
    <label for="name">Enter Project Title:</label>
    <input type="text" id="Name" name="name" />
    <p></p>
    <label for="startDate">Choose start date:</label>
    <input type="date" id="startDate" name="startDate" />
    <p></p>
    <label for="endDate">Choose end date:</label>
    <input type="date" id="endDate" name="endDate" />
    <p></p>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default NewProjectForm;
