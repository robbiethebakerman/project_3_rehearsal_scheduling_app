import React, {Component} from 'react';
import NewRehearsalForm from '../../components/formComponents/NewRehearsalForm.js';
import Request from '../../helpers/Request.js';


class NewRehearsalFormContainer extends Component{
  constructor(props){
    super(props)
    this.state = {projects: []};
    this.handleRehearsalPost = this.handleRehearsalPost.bind(this);
  }



  componentDidMount(){
    let request = new Request();
    request.get("/api/projects").then((data) =>{
      this.setState({projects: data._embedded.projects})
    })
  }

  handleRehearsalPost(rehearsal){
    let request = new Request();
    request.post('/api/rehearsals', rehearsal).then(() =>{
      window.location= '/create-task'
    });
  }

  render() {
    return(
      <div>
      <NewRehearsalForm projects={this.state.projects} handleRehearsalPost={this.handleRehearsalPost} />
      <p>I'm a NewRehearsalContainer</p>
      </div>
    )
  }
}

export default NewRehearsalFormContainer;
