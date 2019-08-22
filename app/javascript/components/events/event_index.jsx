import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from '@material-ui/core/Grid';
import EventsCard from '../shared/card_events'

class EventIndex extends React.Component {
  render() {
    const {classes, events} = this.props;
    return (
      <div>
        <div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <Grid container justify='center'>
                <Grid item xs={10}>
                  <Grid container  direction="row" alignItems="center">
                    {events.map((event, i) => {
                      return(
                        <Grid item key={i}>
                          <EventsCard image={event.images[0].url.url} name={event.name} address={event.place.address} start_time={event.start_time} end_time={event.end_time} link={event.id}/>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventIndex.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(EventIndex);
