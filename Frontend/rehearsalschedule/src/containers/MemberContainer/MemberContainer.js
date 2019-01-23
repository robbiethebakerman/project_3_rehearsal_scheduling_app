import React, {Component} from 'react';
import MemberList from '../../components/memberComponents/MemberList.js';
import Request from '../../helpers/Request.js';
import MemberDeleteWarningMessage from "../../components/memberComponents/MemberDeleteWarningMessage"

class MemberContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      members: [],
      warningMessage: null
    }
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    this.handleDeleteReject = this.handleDeleteReject.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  getAllMembers(){
    let request = new Request();
    let id = this.props.id
    request.get(`/api/projects/${id}/members`).then((data) =>{
      this.setState({members: data})
    })
  }

  componentDidMount(){
    this.getAllMembers();
  }

  handleEditClick(id){
    window.location = `/edit-member/${id}/`;
  }

  handleDeleteConfirm(member_id){
    const request = new Request();
    request.delete(`/api/members/${member_id}`).then(()=>{
      this.setState({warningMessage: null});
      this.getAllMembers();
    })
  }

  handleDeleteReject(){
    this.setState({warningMessage: null});
  }

  handleDeleteClick(member){
    this.setState({
      warningMessage: <MemberDeleteWarningMessage
        handleDeleteConfirm={this.handleDeleteConfirm}
        handleDeleteReject={this.handleDeleteReject}
        member={member}
      />
    })
  }


render(){
  return(
    <div>
      <MemberList members={this.state.members} handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick}/>
      {this.state.warningMessage}
    </div>
  );
}

}


export default MemberContainer;
