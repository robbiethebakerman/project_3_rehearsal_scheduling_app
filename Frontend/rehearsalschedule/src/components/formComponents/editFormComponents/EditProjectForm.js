
import React from 'react';

const EditProjectForm = (props) =>{

  if(!props.project){
      return null;
  }


function handleSubmit(event){
  // console.log(props);
    event.preventDefault();
    const project = {
      "id": props.project.id,
      "name": event.target.name.value,
      "startDate": event.target.startDate.value,
      "endDate": event.target.endDate.value,
    }
    props.handleProjectPut(project);
    };



return(
  <div>
  <form action="/button-type" onSubmit={handleSubmit}>
  <h1>Edit Project</h1>
  <label for="name">Edit name:</label>
  <input type="text" id="name" name="name" defaultValue={props.project.name} />
  <label for="startTime">Edit start date:</label>
  <input type="date" id="startDate" name="startDate" defaultValue={props.project.startDate.slice(0, 10)}/>
  <label for="endTime">Edit end date:</label>
  <input type="date" id="endDate" name="endDate" defaultValue={props.project.endDate.slice(0, 10)}/>
  <button type="submit">Save</button>
  </form>
  </div>
)

}


export default EditProjectForm;
