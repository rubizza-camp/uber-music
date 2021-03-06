import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "./style/landingPage";
import Navigation from "./navigation/navigation";
import Parallax from "./parallax.jsx";


class LandingPage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Navigation login={this.props.login} image={this.props.image}/>
        <Parallax filter small image={this.props.mainImage}/>
        <div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
