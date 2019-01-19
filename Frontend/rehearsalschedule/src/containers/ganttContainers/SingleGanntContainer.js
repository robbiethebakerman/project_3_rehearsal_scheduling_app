import React, {Component, Fragment} from 'react';
import GanttChartComponent from "../../components/ganttComponents/SingleGanttComponent";

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

                },
                {
                    taskID: "TaskTwo",
                    taskName: "Drama Call",
                    resource: "Hall Two",
                    startDate: new Date(2019, 1, 1, 15, 30),
                    endDate: new Date(2019, 1, 1, 18),
                    duration: null,
                },
                {
                    taskID: "TaskThree",
                    taskName: "Production Team Meeting",
                    resource: "Office",
                    startDate: new Date(2019, 1, 1, 19),
                    endDate: new Date(2019, 1, 1, 19,30),
                    duration: null,
                }
                ]
        }
    }


    render() {
        return (
            <Fragment>
            <div>
                <GanttChartComponent chartData={this.state.data}/>
            </div>
            </Fragment>
        )
    }


}


export default SingleGanttContainer;