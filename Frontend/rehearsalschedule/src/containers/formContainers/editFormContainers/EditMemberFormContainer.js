import React, { Component } from 'react';
import EditMemberForm from '../../../components/formComponents/editFormComponents/EditMemberForm.js';
import Request from '../../../helpers/Request.js';

class EditMemberFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            member: null
        };
        this.handleMemberPut = this.handleMemberPut.bind(this);
    }

    getMember() {
        const request = new Request();
        request.get(`/api/members/${this.props.id}`).then((data) =>{
            this.setState({member: data})
        })
    }

    componentDidMount(){
        this.getMember();
    }

    handleMemberPut(member){
        let request = new Request();
        request.put(`/api/members/${this.props.id}`, member).then(() =>{
            window.location= '/'
        });
    }

    render() {
        return(
            <EditMemberForm
                member={this.state.member}
                handleMemberPut={this.handleMemberPut}/>
        )
    }

}

export default EditMemberFormContainer;
