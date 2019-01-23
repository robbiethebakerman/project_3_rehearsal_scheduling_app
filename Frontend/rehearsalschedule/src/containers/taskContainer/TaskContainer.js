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
    console.log("container props", this.props);
    let request = new Request();
    let id = this.props.id
    request.get(`/api/projects/${id}/tasks`).then((data) =>{
      this.setState({tasks: data})
      console.log("componenet did mount, taskcontainer", data);
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
