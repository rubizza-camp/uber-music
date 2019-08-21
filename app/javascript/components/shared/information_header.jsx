import React from 'react';
import PropTypes from "prop-types";
import SnackbarContent from "../shared/SnackbarContent.jsx";

class Navigation extends React.Component {
  render() {
    const { message, color } = this.props;
    return (
      <SnackbarContent
        message={
          <span>
            <b>{message}</b>
            </span>
        }
        close
        color={color}
        icon="info_outline"
      />
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object
};

export default (Navigation);
