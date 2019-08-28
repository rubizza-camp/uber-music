import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from '@material-ui/core/Grid';
import EventCard from '../shared/event_card'
import Search from "../shared/search/event_search";

class EventIndex extends React.Component {
  render() {
    const {events} = this.props;
    return (
      <div>
        <Search events={events}/>
      </div>
    );
  }
}

EventIndex.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(EventIndex);
