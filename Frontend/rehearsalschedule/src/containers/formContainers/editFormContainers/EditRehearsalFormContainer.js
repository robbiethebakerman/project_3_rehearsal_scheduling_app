import React, {Component} from 'react';
import EditRehearsalForm from "../../../components/formComponents/editFormComponents/EditRehearsalForm";
import Request from '../../../helpers/Request.js';


class EditRehearsalFormContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            rehearsal: null
        };
        this.handleRehearsalPut = this.handleRehearsalPut.bind(this);
    }

    getRehearsal() {
        const request = new Request();
        request.get(`/api/rehearsals/${this.props.id}`).then((data) =>{
            this.setState({rehearsal: data})
        })
    }

    componentDidMount(){
        this.getRehearsal();
    }

    handleRehearsalPut(rehearsal){
        let request = new Request();
        request.put(`/api/rehearsals/${this.props.id}`, rehearsal).then(() =>{
            window.location= '/'
        });
    }

    render() {
        return(
            <div>
                <EditRehearsalForm
                    rehearsal={this.state.rehearsal}
                    handleRehearsalPut={this.handleRehearsalPut} />
            </div>
        )
    }
}

export default EditRehearsalFormContainer;
