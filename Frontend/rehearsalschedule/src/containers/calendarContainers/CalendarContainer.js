import React, {Component, Fragment} from 'react';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less'
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../css/calendar.css';
import moment from "moment";
import rehearsals from './rehearsalsDummyData';
import EventComponent from '../../components/calendarComponents/EventComponent.js';

//Could manually adjust imported css above by copying built-in css from the node modules to current directory
// then importing css from there instead of the node modules one, then free to override as wished

//creating a localizer to be assigned to BigCalendar component (for sorting times and dates)
const localizer = BigCalendar.momentLocalizer(moment);

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSelectRehearsal = this.handleSelectRehearsal.bind(this);
    }

    // addTimeRangeStringToRehearsalObjects() {
    //
    // }

    // To be used with React Big Calendars built-in onSelectEvent prop (or onDoubleClickEvent)
    // Will take user to page for the gantt chart for the rehearsal
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
                    events={rehearsals}
                    startAccessor="start"
                    endAccessor="end"
                    titleAccessor="location"
                    tooltipAccessor="start"
                    scrollToTime={scrollStartTime}
                    onSelectEvent={this.handleSelectRehearsal}
                    // components={{month: {event: EventComponent}}}
                    formats={formats}
                    popup={true}
                />
            </div>
        )
    }
}

export default CalendarContainer;