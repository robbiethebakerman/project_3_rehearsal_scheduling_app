import React, { Component, Fragment } from 'react';
import Request from '../../helpers/Request.js';
import EditProjectForm from '../../components/formComponents/editFormComponents/EditProjectForm.js';


class EditProjectFormContainer extends Component{
  constructor(){
    super(props);
    this.state = {
      project: {}
    }
    this.handleProjectPost = this.handleProjectPost.bind(this);
  }


  fetchProject(id){
    let request = new Request();
    request.get(`/api/projects/${id}`)
  }

  componentDidMount(){
    fetchProject(this.props.params.id)
    .then((data) =>{
      this.setState({project: data})
    })
  }

  handleProjectPost(project){
    let request = new Request();
    request.put('/api/projects', project).then(()=>
    window.location = '/');
  }

  render() {
    return(
      <EditProjectForm project={this.state.project} handleProjectPost={this.handleProjectPost}/>
    )
  }

}

export default EditProjectFormContainer;
