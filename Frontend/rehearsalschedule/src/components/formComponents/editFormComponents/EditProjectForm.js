import React from 'react';

const EditProjectForm = (props) =>{

  if(!props.project){
    return null
  }

  function handleSubmit(data) {
    event.preventDefault();
    const project = {
      "name": target.name.value,
      "startDate": target.startDate.value,
      "endDate": target.endDate.value
    }
    props.handleProjectPost(project);
  }


  return(
    <div>
    <h1>Edit a Project</h1>
    <form onSubmit={handleSubmit}>

    <input type="text" placeholder={props.name} name="name"  />

    <label for="startDate">Choose start date:</label>
    <input type="date" id="startDate" name="startDate" />

    <label for="endDate">Choose end date:</label>
    <input type="date" id="endDate" name="endDate" />

    <button type="submit">Save</button>
    </form>
    </div>
  )


}



export default EditProjectForm;
