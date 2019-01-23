import React, {Component} from 'react';
import RehearsalList from '../../components/rehearsalComponents/RehearsalList.js';
import Request from '../../helpers/Request.js';

class RehearsalContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      rehearsals: []
    }
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/rehearsals').then((data) =>{
      this.setState({rehearsals: data._embedded.rehearsals})
    })
  }


render(){
  return(
    <RehearsalList rehearsals={this.state.rehearsals}/>
  );
}

}


export default RehearsalContainer;
