import React from 'react';

const NewTaskForm = (props) =>{

  const options = props.rehearsals.map((rehearsal, index) =>{
    return <option key={rehearsal.id} value={rehearsal._links.self.href}>{rehearsal.name}</option>
  })

  function handleSubmit(event){
    event.preventDefault();
    const task = {
      "name": event.target.name.value,
      "startTime": event.target.startTime.value,
      "endTime": event.target.endTime.value,
      "rehearsal": event.target.rehearsal.value
    }
    props.handleTaskPost(task);
  }


  return(
    <div>
    <h1>Create a task</h1>
    <form onSubmit={handleSubmit}>
    <label for="startTime">Enter start time:</label>
    <input type="datetime-local" id="startTime" name="startTime" />
    <p></p>
    <label for="endTime">Enter end time:</label>
    <input type="datetime-local" id="endTime" name="endTime" />
    <p></p>
    <label for="name">Enter Task Name:</label>
    <input type="text" id="name" name="name" />
    <p></p>
    <select name="rehearsal">
    <option value="" disabled selected>Select a Rehearsal</option>
    {options}
    </select>
    <p></p>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}



export default NewTaskForm
