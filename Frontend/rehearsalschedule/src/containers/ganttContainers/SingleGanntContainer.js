import React, {Component, Fragment} from 'react';
import GanttChartComponent from "../../components/ganttComponents/SingleGanttComponent";
import Request from '../../helpers/Request';

class SingleGanttContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rehearsalData: null

        }
    }

    componentDidMount() {

        let request = new Request();
        const url = '/api/rehearsals/' + this.props.id + '/tasks';
        request.get(url).then((data) => {
            this.setState({rehearsalData: data._embedded.tasks});

        })
    }


    render() {
            return (
                <Fragment>
                    <div>
                        <GanttChartComponent chartData={this.state.rehearsalData}/>
                    </div>
                </Fragment>
            )
        }


}


export default SingleGanttContainer;