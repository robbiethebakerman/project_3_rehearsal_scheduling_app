import Chart from 'react-google-charts';
import React, {Fragment} from 'react';

const GanttChartComponent = (props) => {


        if (!props.chartData) {
            return null;
        }

        return (

            <Fragment>
            <div className={"gantt-chart"}>
                <Chart

                    width={'100%'}
                    height={'400px'}
                    chartType="Gantt"
                    loader={<div>Loading Chart</div>}

                    data = {   [

                        [
                            { type: 'string', label: 'Task ID' },
                            { type: 'string', label: 'Task Name' },
                            { type: 'string', label: 'Resource' },
                            { type: 'date', label: 'Start Date' },
                            { type: 'date', label: 'End Date' },
                            { type: 'number', label: 'Duration' },
                            { type: 'number', label: 'Percent Complete' },
                            { type: 'string', label: 'Dependencies' },
                        ],
                        [
                            `${props.chartData[0].id}`,
                            `${props.chartData[0].name}`,
                            `${props.chartData[0].name}`,
                            props.chartData[0].starttime,
                            props.chartData[0].endtime,
                            props.chartData[0].duration,
                            100,
                            null,
                        ],
                        // [
                        //     `${props.chartData[1].taskID}`,
                        //     `${props.chartData[1].taskName}`,
                        //     `${props.chartData[1].resource}`,
                        //     props.chartData[1].startDate,
                        //     props.chartData[1].endDate,
                        //     props.chartData[1].duration,
                        //     100,
                        //     null,
                        // ],
                        // [
                        // `${props.chartData[2].taskID}`,
                        // `${props.chartData[2].taskName}`,
                        // `${props.chartData[2].resource}`,
                        // props.chartData[2].startDate,
                        // props.chartData[2].endDate,
                        // props.chartData[2].duration,
                        // 100,
                        // null,
                        // ]
                    ]

                    }
                options={{
                    height: 400,
                    width: 750,
                    gantt: {
                        trackHeight: 30,
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
                />
            </div>
            </Fragment>
        )

};


export default GanttChartComponent;