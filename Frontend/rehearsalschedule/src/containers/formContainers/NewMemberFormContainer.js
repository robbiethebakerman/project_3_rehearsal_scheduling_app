import React, { Component, Fragment } from 'react';
import NewMemberForm from '../../components/formComponents/NewMemberForm.js';
import Request from '../../helpers/Request.js';

class NewMemberFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      teams: []
    };
    this.handleMemberPost = this.handleMemberPost.bind(this);
    // this.handleMemberClick = this.handleMemberClick.bind(this);
  }


  componentDidMount(){
    let request = new Request();
    request.get("/api/teams").then((data) =>{
      this.setState({teams: data._embedded.teams})
    })
  }

  handleMemberPost(member){
    let request = new Request();
    request.post('/api/members', member).then(() =>{
      window.location= '/create-rehearsal'
    });
  }

  // handleMemberClick(member){
  //   let request = new Request();
  //   request.post('/api/members', member).then(() =>{
  //     window.location= '/create-member'
  //   });
  // }


  render() {
    return(
      <NewMemberForm teams={this.state.teams} handleMemberPost={this.handleMemberPost} />
    )
  }

}

export default NewMemberFormContainer;
