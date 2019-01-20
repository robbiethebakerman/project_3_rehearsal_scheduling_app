import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// CSS below manually imported from the default css file in react-big-calendar library
// With all default settings in place, now free to customise as needed
// Notes on currently customised elements are commented in the css file
import '../../css/react-big-calendar.css';
import '../../css/calendar.css';
import moment from "moment";
import rehearsals from './rehearsalsDummyData';
import EventComponent from '../../components/calendarComponents/EventComponent.js';

//creating a localizer to be assigned to BigCalendar component (for sorting times and dates)
const localizer = BigCalendar.momentLocalizer(moment);

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rehearsals: rehearsals
        };
        this.handleSelectRehearsal = this.handleSelectRehearsal.bind(this);
    }

    addTimeRangeStringToRehearsalObjects() {
        this.state.rehearsals.forEach((rehearsal) => {
            const startTime = rehearsal.start.toLocaleTimeString().slice(0, 5);
            const endTime = rehearsal.end.toLocaleTimeString().slice(0, 5);
            rehearsal.timeRange = startTime + ' - ' + endTime;
        })
    }

    componentDidMount() {
        this.addTimeRangeStringToRehearsalObjects();
    }

    // To be used with React Big Calendars built-in onSelectEvent prop (or onDoubleClickEvent)
    // Will take user to page for the gantt chart for the rehearsal
    // Potential alternative, create a Component or element in here and
    // assign it to e.g., this.state.rehearsalDetail, element can be placed in render function below as a variable
    // defaulting to null
    handleSelectRehearsal(rehearsal) {
        window.location = `/${rehearsal.id}`;
    }

    render() {
        // setting a default time of 9 for scrollToTime
        const scrollStartTime = new Date();
        scrollStartTime.setHours(9);
        // Setting 24hr time format for time range displayed on events (rehearsals)
        const formats = {
            eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
                localizer.format(start, 'HH:mm', culture) + ' — ' +
                localizer.format(end, 'HH:mm', culture)
        };

        return(
            <div className="calendar-container">
                <h1>Calendar Container</h1>
                <BigCalendar
                    className="big-calendar"
                    localizer={localizer}
                    events={this.state.rehearsals}
                    startAccessor="start"
                    endAccessor="end"
                    titleAccessor="location"
                    tooltipAccessor="timeRange"
                    scrollToTime={scrollStartTime}
                    onSelectEvent={this.handleSelectRehearsal}
                    // Below prop uses custom event in EventComponent.js for the month view, switched off for now
                    // components={{month: {event: EventComponent}}}
                    formats={formats}
                    popup={true}
                />
            </div>
        )
    }
}

export default CalendarContainer;