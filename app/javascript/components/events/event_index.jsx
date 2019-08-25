import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from '@material-ui/core/Grid';
import EventsCard from '../shared/card_events'

class EventIndex extends React.Component {
  render() {
    const {events} = this.props;
    return (
      <div>
        <Grid container justify='center'>
          <Grid item xs={10}>
            <Grid container direction="row" alignItems="center">
              {events.map((event, i) => {
                return (
                  <Grid item key={i}>
                    <EventsCard image={event.images[0].url.url} name={event.name} address={event.place.address}
                                start_time={event.start_time} end_time={event.end_time} link={event.id}/>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventIndex.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(EventIndex);
