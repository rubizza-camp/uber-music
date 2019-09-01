import React from "react";
import DatePicker from "react-datepicker";
import { addDays, setHours, setMinutes } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class EventDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSender: props.dataSender,
      not_available_time: props.not_available_time,
      startDate: new Date(props.date_time)
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(date) {
    this.setState({startDate: date});
    this.state.dataSender(date)
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={addDays(new Date(), 1)}
        maxDate={addDays(new Date(), 3)}
        excludeTimes={this.state.not_available_time.map((date) => 
          setMinutes(date, 0))
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
