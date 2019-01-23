import React, {Component} from 'react';
import RehearsalList from '../../components/rehearsalComponents/RehearsalList.js';
import Request from '../../helpers/Request.js';

class RehearsalContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      rehearsals: []
    }
    this.handleEditClick = this.handleEditClick.bind(this)
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/rehearsals').then((data) =>{
      this.setState({rehearsals: data._embedded.rehearsals})
    })
  }

  handleEditClick(id){
    window.location = `/edit-rehearsal/${id}/`;
  }

render(){
  return(
    <RehearsalList rehearsals={this.state.rehearsals} handleEditClick={this.handleEditClick}/>
  );
}

}


export default RehearsalContainer;
