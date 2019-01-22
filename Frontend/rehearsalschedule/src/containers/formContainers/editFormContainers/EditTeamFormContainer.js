import React, { Component, Fragment } from 'react';
import Request from '../../../helpers/Request.js';
import EditTeamForm from "../../../components/formComponents/editFormComponents/EditTeamForm";

class EditTeamFormContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects: [],
            team: null
        };
        this.handleTeamPut = this.handleTeamPut.bind(this);
    }

    getAllProjects() {
        const request = new Request();
        request.get("/api/projects").then((data) =>{
            this.setState({projects: data._embedded.projects})
        })
    }

    getTeam() {
        const request = new Request();
        request.get(`/api/teams/${this.props.id}`)
            .then((data) => {
                this.setState({team: data})
            })
    }

    componentDidMount(){
        this.getTeam();
        this.getAllProjects();
    }


    handleTeamPut(team){
        const request = new Request();
        request.put(`/api/teams/${this.props.id}`, team).then(() =>{
            window.location= '/calendar'
        });
    }


    render() {
        return(
            <EditTeamForm
                projects={this.state.projects}
                team={this.state.team}
                handleTeamPut={this.handleTeamPut}/>
        )
    }

}

export default EditTeamFormContainer;
