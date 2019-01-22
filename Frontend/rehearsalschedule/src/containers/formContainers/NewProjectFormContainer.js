import React, { Component, Fragment } from 'react';
import Request from '../../helpers/Request.js';
import NewProjectForm from '../../components/formComponents/NewProjectForm.js';

class NewProjectFormContainer extends Component {
  constructor(props){
    super(props)
    this.handleProjectPost = this.handleProjectPost.bind(this);
  }


  handleProjectPost(project){
    let request = new Request();
    request.post('/api/projects', project).then(() =>{
      window.location= '/projects'
    });
  }

  render() {
    return(
      <NewProjectForm handleProjectPost={this.handleProjectPost}/>
    )
  }

}

export default NewProjectFormContainer;
