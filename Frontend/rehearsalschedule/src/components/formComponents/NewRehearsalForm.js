import React from 'react';


const NewRehearsalForm = (props) =>{

  const options = props.projects.map((project, index) =>{
    return <option key={project.id} value={project._links.self.href}>{project.name}</option>
  })

  function handleSubmit(event){
    event.preventDefault();
    const rehearsal = {
      "startTime": event.target.startTime.value,
      "endTime": event.target.endTime.value,
      "project": event.target.project.value,
      "name": event.target.name.value
    }
    props.handleRehearsalPost(rehearsal);
  }

  return(
    <div>
    <h1>Create a rehearsal</h1>
    <form onSubmit={handleSubmit}>
    <label for="name">Enter Rehearsal Name:</label>
    <input type="text" id="name" name="name" />
    <p></p>
    <label for="startTime">Enter start time:</label>
    <input type="datetime-local" id="startTime" name="startTime" />
    <p></p>
    <label for="endTime">Enter end time:</label>
    <input type="datetime-local" id="endTime" name="endTime" />
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

export default NewRehearsalForm;
