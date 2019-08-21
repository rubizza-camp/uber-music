import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import OrganizationCard from './organization_card'
import Grid from '@material-ui/core/Grid'

class OrganizationDetail extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Grid container direction="row" justify="center" alignItems="stretch" spacing={3}>
            { this.props.organizations.map((organization, i) => 
                <Grid item key={i}>
                  <OrganizationCard organization={ organization } width={'250px'} key = {i} />
                </Grid>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(OrganizationDetail);
