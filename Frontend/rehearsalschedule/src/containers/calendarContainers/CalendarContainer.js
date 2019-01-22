import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// CSS below manually imported from the default css file in react-big-calendar library
// With all default settings in place, now free to customise as needed
// Notes on currently customised elements are commented in the css file
import '../../css/react-big-calendar.css';
import '../../css/calendar.css';
import moment from "moment";
import 'moment/locale/en-gb';
import rehearsals from './rehearsalsDummyData';
import EventComponent from '../../components/calendarComponents/EventComponent.js';
import Request from '../../helpers/Request.js';

// Setting locale to en-GB (i.e., UK)) using moment,
// then creating a localizer to be assigned to BigCalendar component (for sorting times and dates)
moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment);

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rehearsals: rehearsals,
            rehearsalPopup: null
        };
        this.handleSelectRehearsalNewPage = this.handleSelectRehearsalNewPage.bind(this);
        this.handleSelectRehearsalShowElement = this.handleSelectRehearsalShowElement.bind(this);
        this.getAllRehearsals = this.getAllRehearsals.bind(this);
    }

    getAllRehearsals() {
        let request = new Request();
        request.get('/api/rehearsals').then((data) => {
                this.setState({rehearsals: data._embedded.rehearsals});
            })
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
        this.getAllRehearsals();
    }

    // To be used with React Big Calendars built-in onSelectEvent prop (or onDoubleClickEvent)
    // Will take user to page for the gantt chart for the rehearsal
    // Potential alternative, create a Component or element in here and
    // assign it to e.g., this.state.rehearsalDetail, element can be placed in render function below as a variable
    // defaulting to null
    handleSelectRehearsalNewPage(rehearsal) {
        window.location = `/calendar/${rehearsal.id}`;
        // window.location = "/gantt";
    }

    handleSelectRehearsalShowElement(rehearsal) {
        const newElement = <h1>rehearsal popup element for {rehearsal.location}</h1>;
        this.setState({rehearsalPopup: newElement});
    }

    render() {
        // setting a default time of 9 for scrollToTime
        const scrollStartTime = new Date();
        scrollStartTime.setHours(9);
        // Setting 24hr time format for time range displayed on events (rehearsals)
        const formats = {
            eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
                localizer.format(start, 'HH:mm', culture) + ' — ' +
                localizer.format(end, 'HH:mm', culture),
            agendaTimeRangeFormat: ({ start, end }, culture, localizer) =>
                localizer.format(start, 'HH:mm', culture) + ' — ' +
                localizer.format(end, 'HH:mm', culture),
            dayHeaderFormat: (date, culture, localizer) =>
                localizer.format(date, 'dddd DD MMMM YYYY', culture),
            dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
                localizer.format(start, 'DD MMMM YYYY' , culture) + ' — ' +
                localizer.format(end, 'DD MMMM YYYY', culture),
            agendaHeaderFormat: ({ start, end }, culture, localizer) =>
                localizer.format(start, 'DD MMMM YYYY' , culture) + ' — ' +
                localizer.format(end, 'DD MMMM YYYY', culture),
            agendaDateFormat: (date, culture, localizer) =>
                localizer.format(date, 'ddd DD MMM', culture)
        };

        return(
            <div className="calendar-container">
                <h1>Rehearsal Schedule</h1>
                <BigCalendar
                    className="big-calendar"
                    localizer={localizer}
                    events={this.state.rehearsals}
                    startAccessor="startTime"
                    endAccessor="endTime"
                    titleAccessor="name"
                    tooltipAccessor="name"
                    scrollToTime={scrollStartTime}
                    onSelectEvent={this.handleSelectRehearsalNewPage}
                    // Below prop uses custom event in EventComponent.js for the month view, switched off for now
                    // components={{month: {event: EventComponent}}}
                    formats={formats}
                    popup={true}
                />
                {this.state.rehearsalPopup}
            </div>
        )
    }
}

export default CalendarContainer;