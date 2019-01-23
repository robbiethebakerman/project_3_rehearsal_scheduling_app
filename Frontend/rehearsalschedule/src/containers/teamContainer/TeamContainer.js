import React, {Component} from 'react';
import TeamList from '../../components/teamComponents/TeamList.js';
import Request from '../../helpers/Request.js';
import TeamDeleteWarningMessage from '../../components/teamComponents/TeamDeleteWarningMessage';

class TeamContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      teams: [],
      warningMessage: null
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    this.handleDeleteReject = this.handleDeleteReject.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  getAllTeams() {
    const request = new Request();
    request.get('/api/teams').then((data) =>{
      this.setState({teams: data._embedded.teams})
    })
  }

  componentDidMount(){
    this.getAllTeams();
  }

  handleDeleteConfirm(team_id) {
    const request = new Request();
    request.delete(`/api/teams/${team_id}`).then(() => {
      this.setState({warningMessage: null});
      this.getAllTeams();
    })
  }

  handleDeleteReject() {
    this.setState({warningMessage: null});
  }

  handleDeleteClick(team) {
    this.setState({
      warningMessage: <TeamDeleteWarningMessage
          handleDeleteConfirm={this.handleDeleteConfirm}
          handleDeleteReject={this.handleDeleteReject}
          team={team}
      />
    })
  }

  handleEditClick(id){
    window.location = `/edit-team/${id}/`;
  }

render(){
  return(
    <div>
      <TeamList
          teams={this.state.teams}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick}
      />
      {this.state.warningMessage}
    </div>
  );
}

}

export default TeamContainer;
