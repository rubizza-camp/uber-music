import React from 'react';
import PropTypes from 'prop-types';

export default function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  }
  return(
    <React.Fragment>
      <div className="form-group">
        <input
          className="form-control"
          id="description"
          name="description"
          type="description"
          placeholder="Описание"
          value={props.description}
          onChange={props.handleChange}
        />
      </div>
    </React.Fragment>
  );
}
