import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Search from "../shared/search/event_search";

class EventIndex extends React.Component {
  render() {
    const {events, organizations} = this.props;
    return (
      <div>
        <Search events={events} organizations={organizations}/>
      </div>
    );
  }
}

EventIndex.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(EventIndex);
