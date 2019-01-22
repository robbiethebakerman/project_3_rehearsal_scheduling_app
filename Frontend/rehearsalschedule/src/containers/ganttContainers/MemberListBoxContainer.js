import React, {Component} from 'react'
import MemberListComponent from "../../components/ganttComponents/MemberListComponent";

class MemberListBoxContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.getMembers = this.getMembers.bind(this);
    }


    getMembers(){
        let newArray = [];
        for(let task of this.props){
            for(let members of task.members) {
                newArray.push(members);
            }
        }
        newArray.flat(1);
        console.log("getMembers:", newArray);
        this.state.data = newArray;
    }


    componentDidMount() {

        console.log(this.props);
        this.getMembers();
    }


    render() {
        if (!this.props.chartData) {
            return null;
        }
        else {
            return (
                <div>
                    <MemberListComponent members={this.state.data}/>
                </div>
            )
        }
    }


}

export default MemberListBoxContainer;