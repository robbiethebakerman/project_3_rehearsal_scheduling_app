import React, {Component} from 'react';
import TeamList from '../../components/teamComponents/TeamList.js';
import Request from '../../helpers/Request.js';

class TeamContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      teams: []
    }
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/teams').then((data) =>{
      this.setState({teams: data._embedded.teams})
      console.log("teamcontainer", data);
    })
  }


render(){
  return(
    <TeamList teams={this.state.teams}/>
  );
}

}


export default TeamContainer;
