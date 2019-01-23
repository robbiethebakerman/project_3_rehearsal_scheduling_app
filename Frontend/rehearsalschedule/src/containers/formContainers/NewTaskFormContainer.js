import React, { Component, Fragment } from 'react';
import NewTaskForm from '../../components/formComponents/NewTaskForm.js';
import Request from '../../helpers/Request.js';

class NewTaskFormContainer extends Component{
  constructor(props){
    super(props)
    this.state = {rehearsals: []};
    this.handleTaskPost = this.handleTaskPost.bind(this);
  }

  handleTaskPost(task){
    let request = new Request();
    request.post('/api/tasks', task).then(() =>{
      window.location= '/'
    });
  }

  componentDidMount(){
    let request = new Request();
    request.get("/api/rehearsals").then((data) =>{
      this.setState({rehearsals: data._embedded.rehearsals})
    })
  }

  render() {
    return(
      <NewTaskForm rehearsals={this.state.rehearsals} handleTaskPost={this.handleTaskPost} />
    )
  }

}

export default NewTaskFormContainer;
