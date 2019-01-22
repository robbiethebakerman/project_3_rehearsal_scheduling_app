import React from 'react';

const NewTaskForm = (props) =>{

  const options = props.rehearsals.map((rehearsal, index) =>{
    return <option key={rehearsal.id}>{rehearsal.startTime}</option>
  })

  function handleSubmit(event){
    event.preventDefault();
    const task = {
      "name": event.target.name.value,
      "startTime": event.target.name.value,
      "endTime": event.target.name.value,
      "rehearsal": event.target.name.value
    }
    props.handleTaskPost(task);
  }


  return(
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="starttime" name="startTime" />
    <input type="text" placeholder="endtime" name="endTime" />
    <input type="text" placeholder="name" name="name" />
    <select name="rehearsal">
    {options}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}



export default NewTaskForm
