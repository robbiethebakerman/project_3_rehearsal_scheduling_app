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
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name" />
    <input type="text" name="startDate" />
    <input type="text" name="endDate" />
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default NewProjectForm;
