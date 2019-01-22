import React, { Component, Fragment } from 'react';
import NewTeamForm from '../../components/formComponents/NewTeamForm.js';
import Request from '../../helpers/Request.js';

class NewTeamFormContainer extends Component{
  constructor(props){
    super(props)
    this.state = {projects: []};
    this.handleTeamPost = this.handleTeamPost.bind(this);
  }



  componentDidMount(){
    let request = new Request();
    request.get("/api/projects").then((data) =>{
      this.setState({projects: data._embedded.projects})
    })
  }


  handleTeamPost(team){
    let request = new Request();
    request.post('/api/teams', team).then(() =>{
      window.location= '/teams'
    });
  }


  render() {
    return(
      <NewTeamForm projects={this.state.projects} handleTeamPost={this.handleTeamPost}/>
    )
  }

}

export default NewTeamFormContainer;
