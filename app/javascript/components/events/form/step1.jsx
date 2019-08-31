import React from 'react';
import PropTypes from 'prop-types';
import OrganizationSelect from './select_organization';

export default function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
    <div className="form-group">
      <OrganizationSelect map={props.organizations}
                      name={'Organization'}
                      id={'organization'}
                      currentElements={[]}
                      dataSender={props.dataSender}
                      hasError={props.hasError}
      />
    </div>
  );
}
