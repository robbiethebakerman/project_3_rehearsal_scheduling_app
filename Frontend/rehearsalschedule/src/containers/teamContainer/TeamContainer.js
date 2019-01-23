import React, {Component} from 'react';
import TeamList from '../../components/teamComponents/TeamList.js';
import Request from '../../helpers/Request.js';

class TeamContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      teams: []
    }
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/teams').then((data) =>{
      this.setState({teams: data._embedded.teams})
      console.log("teamcontainer", data);
    })
  }

  handleEditClick(id){
    window.location = `/edit-team/${id}/`;
  }

render(){
  return(
    <TeamList teams={this.state.teams} handleEditClick={this.handleEditClick}/>
  );
}

}


export default TeamContainer;
