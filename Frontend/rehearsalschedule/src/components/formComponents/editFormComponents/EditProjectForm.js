// import React from 'react';
//
// const EditProjectForm = (props) =>{
//
//   if(!props.project){
//     return null;
//   }
//
//   function handleSubmit(event) {
//     event.preventDefault();
//     const project = {
//       "name": event.target.name.value,
//       "startDate": event.target.startDate.value,
//       "endDate": event.target.endDate.value
//     };
//     props.handleProjectPut(project);
//   }
//
//
//   return(
//     <div>
//     <h1>Edit a Project</h1>
//     <form onSubmit={handleSubmit}>
//
//     <input type="text" placeholder={props.project.name} name="name"  />
//
//     <label for="startDate">Edit start date:</label>
//     <input type="date" id="startDate" name="startDate" />
//
//     <label for="endDate">Edit end date:</label>
//     <input type="date" id="endDate" name="endDate" />
//
//     <button type="submit" onSubmit={handleSubmit}>Save</button>
//     </form>
//     </div>
//   )
//
//
// }
//
//
//
// export default EditProjectForm;


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
  <input type="date" id="startDate" name="startDate" />
  <label for="endTime">Edit end date:</label>
  <input type="date" id="endDate" name="endDate" />
  <button type="submit">Save</button>
  </form>
  </div>
)

}


export default EditProjectForm;
