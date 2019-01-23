import React, {Component} from 'react';
import MemberList from '../../components/memberComponents/MemberList.js';
import Request from '../../helpers/Request.js';

class MemberContainer extends Component{
  constructor(props){
    super(props);
    this.state ={
      members: []
    }
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/members').then((data) =>{
      this.setState({members: data._embedded.members})
    })
  }


render(){
  return(
    <MemberList members={this.state.members}/>
  );
}

}


export default MemberContainer;
