import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../../../assets/javascripts/components/shared/landingPage";
import Navigation from "./navigation/navigation";


class LandingPage extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Navigation login={this.props.login} image={this.props.image}/>
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