import React, {Component} from 'react';
import TaskList from '../../components/taskComponents/TaskList.js';
import Request from '../../helpers/Request.js';
import TaskDeleteWarningMessage from '../../components/taskComponents/TaskDeleteWarningMessage';
import TeamDeleteWarningMessage from "../teamContainer/TeamContainer";

class TaskContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      warningMessage: null
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    this.handleDeleteReject = this.handleDeleteReject.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  getAllTasks() {
    console.log("container props", this.props);
    let request = new Request();
    let id = this.props.id
    request.get(`/api/projects/${id}/tasks`).then((data) =>{
      this.setState({tasks: data})
      console.log("componenet did mount, taskcontainer", data);
    })

  }

  componentDidMount(){
    this.getAllTasks();
  }

  handleDeleteConfirm(task_id) {
    const request = new Request();
    request.delete(`/api/tasks/${task_id}`).then(() => {
      this.setState({warningMessage: null});
      this.getAllTasks();
    })
  }

  handleDeleteReject() {
    this.setState({warningMessage: null});
  }

  handleDeleteClick(task) {
    this.setState({
      warningMessage: <TaskDeleteWarningMessage
          handleDeleteConfirm={this.handleDeleteConfirm}
          handleDeleteReject={this.handleDeleteReject}
          task={task}
      />
    })
  }

  handleEditClick(id){
    window.location = `/edit-task/${id}/`;
  }


  render(){
    return(
        <div>
          <TaskList
              tasks={this.state.tasks}
              handleEditClick={this.handleEditClick}
              handleDeleteClick={this.handleDeleteClick}
          />
          {this.state.warningMessage}
        </div>
    );
  }

}

export default TaskContainer;
