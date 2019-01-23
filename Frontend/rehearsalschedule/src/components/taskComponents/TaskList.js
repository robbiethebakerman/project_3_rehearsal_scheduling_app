import React from 'react';
import Task from './task.js';



const TaskList = (props) => {

  const tasks = props.tasks.map((task) => {
		 	return (<li key={task.id} className="component-item">
				<Task task={task} handleEditClick={props.handleEditClick} />
			</li>
		)
		})


  return (
    <div>
      <ul className="component-list">
        {tasks}
        </ul>
    </div>
  )


}


export default TaskList;
