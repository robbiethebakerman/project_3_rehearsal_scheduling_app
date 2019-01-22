import React, {Component, Fragment} from 'react';
import GanttChartComponent from "../../components/ganttComponents/SingleGanttComponent";
import MemberListBoxContainer from "./MemberListBoxContainer";
import Request from '../../helpers/Request';

class SingleGanttContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rehearsalData: null
            //     {
            //
            //         taskID: "TaskOne",
            //         taskName: "Music Call",
            //         resource: "Hall One",
            //         startDate: new Date(2019, 1, 1, 16),
            //         endDate: new Date(2019, 1, 1, 17),
            //         duration: null,
            //         members: ["John", "Samantha", "Terrence", "Joan"]
            //
            //     },
            //     {
            //         taskID: "TaskTwo",
            //         taskName: "Drama Call",
            //         resource: "Hall Two",
            //         startDate: new Date(2019, 1, 1, 15, 30),
            //         endDate: new Date(2019, 1, 1, 18),
            //         duration: null,
            //         members: ["James", "Simon", "Alex", "Steven"]
            //     },
            //     {
            //         taskID: "TaskThree",
            //         taskName: "Production Team Meeting",
            //         resource: "Office",
            //         startDate: new Date(2019, 1, 1, 19),
            //         endDate: new Date(2019, 1, 1, 19,30),
            //         duration: null,
            //         members: ["Susan", "Sam", "Sarah", "Shannon"]
            //     }
            //     ]
        }
    }


    componentDidMount() {

        let request = new Request();
        const url = '/api/rehearsals/' + this.props.id + '/tasks';
        request.get(url).then((data) => {
            this.setState({rehearsalData: data._embedded.tasks});
            console.log("component mount calling:", this.state.rehearsalData);

        })
    }


    render() {
        // if (!this.props.rehearsalData) {
        //     return null;
        // }
        // else {
            return (
                <Fragment>
                    <div>
                        {console.log("render function calling!", this.state.rehearsalData)}
                        <GanttChartComponent chartData={this.state.rehearsalData}/>
                        {/*<MemberListBoxContainer chartData={this.state.rehearsalData}/>*/}
                    </div>
                </Fragment>
            )
        }
    // }


}


export default SingleGanttContainer;