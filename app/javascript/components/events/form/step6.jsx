import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../shared/title';

export default function Step6(props) {
  if (props.currentStep !== 6) {
    return null
  }
  return(
    <React.Fragment>
      <div className="form-group">
        <Title content={"Мероприятие успешно создано!"}/>
      </div>
    </React.Fragment>
  );
}
