import React, { Component, Fragment } from 'react';
import Request from '../../../helpers/Request.js';
import EditTaskForm from "../../../components/formComponents/editFormComponents/EditTaskForm";


class EditTaskFormContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      task: null,
      rehearsals: []
    };
    this.handleTaskPut = this.handleTaskPut.bind(this);
  }

  getAllRehearsals(){
    const request = new Request();
    request.get("/api/rehearsals").then((data) =>{
      this.setState({rehearsals: data._embedded.rehearsals})
    })
  }

  getTask(){
    const request = new Request();
    request.get(`/api/task/${this.props.id}`)
    .then((data) => {
      this.setState({task: data})
    })
  }

  componentDidMount(){
    this.getTask();
    this.getAllRehearsals();
  }

  handleTaskPut(task){
    const request = new Request();
    request.put(`/api/tasks/${this.props.id}`, task).then(() =>{
        window.location= '/calendar'
    });
  }

  render(){
    return(
      <EditTaskForm task={this.state.task} rehearsals={this.state.rehearsals} handleTaskPut={this.handleTaskPut}/>
    )
  }

}

export default EditTaskFormContainer;
