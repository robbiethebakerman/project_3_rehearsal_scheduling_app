import React, {Component} from 'react';
import ProjectList from '../../components/projectComponents/ProjectList.js';
import Request from '../../helpers/Request.js';

class ProjectContainer extends Component{
  constructor(props){
    super(props);
    this.state = {projects: []}
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/projects').then((data) =>{
      this.setState({projects: data._embedded.projects})
    })
  }

  render(){
    return(
      <ProjectList projects={this.state.projects}/>
    );
  }
}

export default ProjectContainer;
