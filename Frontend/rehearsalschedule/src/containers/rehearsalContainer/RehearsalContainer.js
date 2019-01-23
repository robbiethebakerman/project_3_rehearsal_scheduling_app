import React, {Component} from 'react';
import RehearsalList from '../../components/rehearsalComponents/RehearsalList.js';
import Request from '../../helpers/Request.js';
import RehearsalDeleteWarningMessage from "../../components/rehearsalComponents/RehearsalDeleteWarningMessage.js"

class RehearsalContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      rehearsals: [],
      warningMessage: null
    }
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    this.handleDeleteReject = this.handleDeleteReject.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  getAllRehearsals(){
    let request = new Request();
    request.get('/api/rehearsals').then((data) =>{
      this.setState({rehearsals: data._embedded.rehearsals})
    })
  }

  componentDidMount(){
    this.getAllRehearsals();
  }

  handleEditClick(id){
    window.location = `/edit-rehearsal/${id}/`;
  }

  handleDeleteConfirm(rehearsal_id){
    const request = new Request();
    console.log("handleDeleteConfirm rehearsal_id", rehearsal_id);
    request.delete(`/api/rehearsals/${rehearsal_id}`).then(()=>{
      this.setState({warningMessage: null});
      this.getAllRehearsals();
    })
  }

  handleDeleteReject(){
    this.setState({warningMessage: null});
  }

  handleDeleteClick(rehearsal){
    this.setState({
      warningMessage: <RehearsalDeleteWarningMessage
        handleDeleteConfirm={this.handleDeleteConfirm}
        handleDeleteReject={this.handleDeleteReject}
        rehearsal={rehearsal}
        />
    })
  }

render(){
  console.log(this.state.warningMessage);
  return(
    <div>
    <RehearsalList rehearsals={this.state.rehearsals} handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick}/>
    {this.state.warningMessage}
    </div>
  );
}

}


export default RehearsalContainer;
