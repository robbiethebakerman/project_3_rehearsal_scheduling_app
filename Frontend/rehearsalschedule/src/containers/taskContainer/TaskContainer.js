import React, {Component} from 'react';
import TaskList from '../../components/taskComponents/TaskList.js';
import Request from '../../helpers/Request.js';

class TaskContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      tasks: []
    }
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/tasks').then((data) =>{
      this.setState({tasks: data._embedded.tasks})
      console.log("taskcontainer", data);
    })
  }

 handleEditClick(id){
   window.location = `/edit-task/${id}/`;
 }


render(){
  return(
    <TaskList tasks={this.state.tasks} handleEditClick={this.handleEditClick}/>
  )
}

}


export default TaskContainer;
