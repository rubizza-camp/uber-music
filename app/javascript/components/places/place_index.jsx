import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Search from "../shared/search/place_search";

class PlaceIndex extends React.Component {
  render() {
    const {places} = this.props;
    return (
      <div>
        <Search places={places}/>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(PlaceIndex);
