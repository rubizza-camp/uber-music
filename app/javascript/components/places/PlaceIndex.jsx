import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from '@material-ui/core/Grid';
import PlacesCard from "../shared/card_places";

function make_url(id) {
  return 'places/' + id
}

class PlaceIndex extends React.Component {
  render() {
    const {places} = this.props;
    return (
      <div>
        <React.Fragment>
          <Grid container justify="center" alignItems="center">
            {
              places.map((place, i) =>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
                  <PlacesCard name={place.name} address={place.address} image={place.first_image_url}
                              link={make_url(place.id)}/>
                </Grid>
              )
            }
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(PlaceIndex);
