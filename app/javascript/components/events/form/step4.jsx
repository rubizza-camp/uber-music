import React from 'react';
import PropTypes from 'prop-types';

export default function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }
  return(
    <React.Fragment>
      <div className="form-group">
        <input
          className="form-control"
          id="name"
          name="name"
          type="name"
          placeholder="Название мероприятия"
          value={props.name}
          onChange={props.handleChange}
        />
      </div>
    </React.Fragment>
  );
}
