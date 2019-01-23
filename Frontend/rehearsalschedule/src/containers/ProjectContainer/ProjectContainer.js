import React, {Component} from 'react';
import ProjectList from '../../components/projectComponents/ProjectList.js';
import Request from '../../helpers/Request.js';
import ProjectDeleteWarningMessage from "../../components/projectComponents/ProjectDeleteWarningMessage";

class ProjectContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      projects: [],
      warningMessage: null
    };
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
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

  handleDeleteConfirm(project_id) {
    const request = new Request();
    request.delete(`/api/projects/${project_id}`).then(() => {
      this.setState({warningMessage: null});
      this.getAllProjects();
    })
  }

  handleDeleteClick(project) {
    this.setState({
      warningMessage: <ProjectDeleteWarningMessage
          handleDeleteConfirm={this.handleDeleteConfirm}
          project={project}
      />
    })
  }

  render(){
    return(
        <div>
          <ProjectList projects={this.state.projects} handleDeleteClick={this.handleDeleteClick}/>
          {this.state.warningMessage}
        </div>
    );
  }
}

export default ProjectContainer;
