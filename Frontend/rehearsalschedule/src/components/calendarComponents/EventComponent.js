import React, {Component} from 'react';

class EventComponent extends Component {


    componentDidMount() {
        console.log("event from custom event component", this.props.event);
    }

    render() {
        const {location, timeRange} = this.props.event;

        return(
            <div className="custom-rehearsal-event">
                <p>{timeRange}</p>
                <p>{location}</p>
            </div>
        )
    }
}

export default EventComponent;