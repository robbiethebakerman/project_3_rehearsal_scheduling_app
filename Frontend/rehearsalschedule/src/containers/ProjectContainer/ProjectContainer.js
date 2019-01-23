import React, {Component} from 'react';
import ProjectList from '../../components/projectComponents/ProjectList.js';
import Request from '../../helpers/Request.js';

class ProjectContainer extends Component{
  constructor(props){
    super(props);
    this.state = {projects: []};
    this.handleDelete = this.handleDelete.bind(this);
  }

  getAllProjects() {
    let request = new Request();
    request.get('/api/projects').then((data) =>{
      this.setState({projects: data._embedded.projects})
    })
  }

  componentDidMount(){
    this.getAllProjects();
  }

  handleDelete(project_id) {
    const request = new Request();
    request.delete(`/api/projects/${project_id}`).then(() => {
      this.getAllProjects();
    })
  }

  render(){
    return(
      <ProjectList projects={this.state.projects} handleDelete={this.handleDelete}/>
    );
  }
}

export default ProjectContainer;
