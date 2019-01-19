import React, {Component, Fragment} from 'react';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less'
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../css/calendar.css';
import moment from "moment";
import events from './rehearsalsDummyData';

const localizer = BigCalendar.momentLocalizer(moment);

class CalendarContainer extends Component {


    render() {
        return(
            <div className="calendar-container">
                <h1>Calendar Container</h1>
                <BigCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    titleAccessor="location"
                />
            </div>
        )
    }
}

export default CalendarContainer;