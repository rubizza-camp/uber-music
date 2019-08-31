import React from 'react';
import PropTypes from 'prop-types';
import EventDatePicker from '../../shared/datepicker';

export default function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <React.Fragment>
      <div className="form-group">
        <EventDatePicker date_time={props.date_time}/>
      </div>
    </React.Fragment>
  );
}
