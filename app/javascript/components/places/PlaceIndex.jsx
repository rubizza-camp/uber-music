import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Parallax from "../shared/parallax.jsx";
import Grid from '@material-ui/core/Grid';
import PlacesCard from "../shared/card_places";

function make_url(id){
  return 'places/' + id
}

class PlaceIndex extends React.Component {
  render() {
    const {classes, places} = this.props;
      return (
        <div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <React.Fragment>
                <Grid container  justify="center" alignItems="center">
                  {
                    places.map((place) =>
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <PlacesCard name={place.name} address={place.address} image={place.images[0].url.url} link={make_url(place.id)}></PlacesCard>
                      </Grid>
                    )
                  }
                </Grid>
              </React.Fragment>
            </div>
          </div>
        </div>
      );
  }
}

export default withStyles(landingPageStyle)(PlaceIndex);
