import React from "react";
import OrganizationCard from "./organization_card";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../../../assets/javascripts/components/shared/landingPage";

class OrganizationBlock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { organizations: props.organizations };
    }
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <div className={classes.container}>
                          <div className='adasd'>
                            { this.state.organizations.map((organization, i) => <OrganizationCard organization={ organization } key = {i} />)}
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


OrganizationBlock.propTypes = {
    classes: PropTypes.object
};

export default withStyles(landingPageStyle)(OrganizationBlock);