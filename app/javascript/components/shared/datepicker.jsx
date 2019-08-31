import React from "react";
import DatePicker from "react-datepicker";
import { addDays, setHours, setMinutes } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class EventDatePicker extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      busyTime: props.busy_time,
      startDate: new Date(props.date_time)
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(date) {
    this.setState({startDate: date});
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        excludeTimes={this.state.busyTime.map((date) => setMinutes(date, 0))
        }
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    );
  }
}
export default (EventDatePicker);
