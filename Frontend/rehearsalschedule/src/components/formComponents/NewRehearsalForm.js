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
      "project": event.target.name.value
    }
    props.handleRehearsalPost(rehearsal);
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="StartTime" name="startTime" />
    <input type="text" placeholder="EndTime" name="endTime" />
    <select name="project">
    {options}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default NewRehearsalForm;
