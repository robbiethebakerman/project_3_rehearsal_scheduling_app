import React, {Component, Fragment} from 'react';

class EventComponent extends Component {


    componentDidMount() {
        console.log("event from custom event component", this.props.event);
    }

    render() {
        const {location, start, end} = this.props.event;
        const startTime = start.toLocaleTimeString().slice(0, 5);
        const endTime = end.toLocaleTimeString().slice(0, 5);
        return(
            <div>
                <p>{startTime} - {endTime}</p>
                <p>{location}</p>
            </div>
        )
    }
}

export default EventComponent;