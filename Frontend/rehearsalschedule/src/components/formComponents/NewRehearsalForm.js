import React from 'react';


const NewRehearsalForm = (props) =>{

  const options = props.projects.map((project, index) =>{
    return <option key={project.id}>{project.name}</option>
  })

  function handleSubmit(event){
    event.preventDefault();
    const rehearsal = {
      "startTime": event.target.name.value,
      "endTime": event.target.name.value,
      "project": event.target.name.value,
      "name": event.target.name.value
    }
    props.handleRehearsalPost(rehearsal);
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="name" name="name" />
    <label for="startTime">Enter start time:</label>
    <input type="datetime-local" id="startTime" name="startTime" />
    <label for="endTime">Enter end time:</label>
    <input type="datetime-local" id="endTime" name="endTime" />
    <select name="project">
    {options}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default NewRehearsalForm;
