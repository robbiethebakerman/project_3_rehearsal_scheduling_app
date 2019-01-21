import React, {Component, Fragment} from 'react';
import GanttChartComponent from "../../components/ganttComponents/SingleGanttComponent";
import MemberListBoxContainer from "../../components/ganttComponents/MemberListBoxContainer";

class SingleGanttContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {

                    taskID: "TaskOne",
                    taskName: "Music Call",
                    resource: "Hall One",
                    startDate: new Date(2019, 1, 1, 16),
                    endDate: new Date(2019, 1, 1, 17),
                    duration: null,
                    members: ["John", "Samantha", "Terrence", "Joan"]

                },
                {
                    taskID: "TaskTwo",
                    taskName: "Drama Call",
                    resource: "Hall Two",
                    startDate: new Date(2019, 1, 1, 15, 30),
                    endDate: new Date(2019, 1, 1, 18),
                    duration: null,
                    members: ["James", "Simon", "Alex", "Steven"]
                },
                {
                    taskID: "TaskThree",
                    taskName: "Production Team Meeting",
                    resource: "Office",
                    startDate: new Date(2019, 1, 1, 19),
                    endDate: new Date(2019, 1, 1, 19,30),
                    duration: null,
                    members: ["Susan", "Sam", "Sarah", "Shannon"]
                }
                ]
        }
    }


    render() {
        return (
            <Fragment>
            <div>
                <GanttChartComponent chartData={this.state.data}/>
                <MemberListBoxContainer chartData={this.state.data}/>
            </div>
            </Fragment>
        )
    }


}


export default SingleGanttContainer;