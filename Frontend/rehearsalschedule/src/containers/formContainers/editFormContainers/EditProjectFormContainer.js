import React, { Component, Fragment } from 'react';
import Request from '../../../helpers/Request.js';
import EditProjectForm from '../../../components/formComponents/editFormComponents/EditProjectForm.js';



class EditProjectFormContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      project: null
    }
    this.handleProjectPut = this.handleProjectPut.bind(this);
  }

getProject(){
  const request = new Request();
  request.get(`/api/projects/${this.props.id}`).then((data) =>{
      this.setState({project: data})
  })
}


  componentDidMount(){
    this.getProject();
  }

  handleProjectPut(project){
    let request = new Request();
    request.put(`/api/projects/${this.props.id}`, project).then(() =>{
        window.location= '/'
    });
  }

  render() {
    return(
      <EditProjectForm project={this.state.project} handleProjectPut={this.handleProjectPut}/>
    )
  }

}

export default EditProjectFormContainer;
