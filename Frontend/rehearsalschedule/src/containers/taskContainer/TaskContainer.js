import React, {Component} from 'react';
import TaskList from '../../components/taskComponents/TaskList.js';
import Request from '../../helpers/Request.js';

class TaskContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      tasks: []
    }
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/tasks').then((data) =>{
      this.setState({tasks: data._embedded.tasks})
      console.log("taskcontainer", data);
    })
  }


render(){
  return(
    <TaskList tasks={this.state.tasks}/>
  );
}

}


export default TaskContainer;
