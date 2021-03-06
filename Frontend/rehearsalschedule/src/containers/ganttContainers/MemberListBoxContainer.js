import React, {Component} from 'react'
import MemberListComponent from "../../components/ganttComponents/MemberListComponent";

class MemberListBoxContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.getMembers = this.getMembers.bind(this);
        // this.getNames = this.getNames.bind(this);
    }

    getMembers(){
        let memberNames = [];
        this.props.chartData.chartData.map((task)=>{
            let array = [];
            array.push(task.name, task.members.map((member)=>{
                return member.name

            }));
            memberNames.push(array);
            memberNames.flat(1);
            this.setState({data: memberNames});
        });
    }



    componentDidMount() {
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