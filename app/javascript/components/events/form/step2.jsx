import React from 'react';
import PropTypes from 'prop-types';
import SelectPlace from '../select_place';

export default function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return(
    <div className="form-group">
      <SelectPlace map={props.places}
                   name={'Place'}
                   id={'place'}
                   currentElement={[]}
                   selector={'#event_place_id'}
      />
    </div>
  );
}
