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
    <p>Create a Project</p>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name" />
    <label for="startDate">Choose start date:</label>
    <input type="date" id="startDate" name="startDate" />
    <label for="endDate">Choose end date:</label>
    <input type="date" id="endDate" name="endDate" />
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default NewProjectForm;
