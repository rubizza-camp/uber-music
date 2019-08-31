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
      startDate: new Date(props.date_time)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({ startDate: date });
    axios({
      method: 'POST',
      url: '/events/select_place',
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
      data: {start_time: date},
    })
      .then(function (response) {
        console.log(response);
        this.state.takenDates = response.data.events.map((event) => new Date(event.start_time));
      })
      .catch(function (error) {
        console.log(error);
      })}

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 10),
          setHours(setMinutes(new Date(), 0), 14),
          setHours(setMinutes(new Date(), 0), 23),
          setHours(setMinutes(new Date(), 0), 24)
        ]}
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
