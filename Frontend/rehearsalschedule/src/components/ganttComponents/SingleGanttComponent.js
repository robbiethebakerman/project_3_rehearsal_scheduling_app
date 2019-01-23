import Chart from 'react-google-charts';
import React, {Fragment} from 'react';
import MemberListBoxContainer from "../../containers/ganttContainers/MemberListBoxContainer";

const GanttChartComponent = (props) => {


        if (!props.chartData) {
            return null;
        }else if(props.chartData.length === 0){

            return(
                <div>
                    <h1> There are no tasks in this rehearsal, please add Tasks</h1>
                </div>
            )
        }


        let dataArray = [];

        const makeDataForChart = () => {

            let defaultParams = [
                { type: "string", label: "Task ID" },
                { type: 'string', label: 'Task Name' },
                { type: 'date', label: 'Start Date' },
                { type: 'date', label: 'End Date' },
                { type: 'number', label: 'Duration' },
                { type: 'number', label: 'Percent Complete' },
                { type: 'string', label: 'Dependencies' },];

            dataArray.push(defaultParams);

            props.chartData.map((task) => {
                 let array = [];
                     array.push(`${task.id}`, `${task.name}`, new Date(task.startTime), new Date(task.endTime), null, 100, null);
                 dataArray.push(array);
            });


        };

        makeDataForChart();

        return (

            <Fragment>
            <div className={"gantt-chart"}>
                <Chart

                    width={'100%'}
                    height={'400px'}
                    chartType="Gantt"
                    loader={<div>Loading Chart</div>}

                    data = {dataArray}

                options={{
                    height: 400,
                    width: 1200,
                    gantt: {
                        trackHeight: 30,
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
                />
                <MemberListBoxContainer chartData={props}/>
            </div>
            </Fragment>
        )

};


export default GanttChartComponent;