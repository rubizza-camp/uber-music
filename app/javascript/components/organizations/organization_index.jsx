import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import OrganizationCard from './organization_card'
import Grid from '@material-ui/core/Grid'

class OrganizationDetail extends React.Component {
  render() {
    const {classes, organizations} = this.props;
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="stretch" spacing={3}>
          {organizations.map((organization, i) =>
            <Grid item key={i}>
              <OrganizationCard organization={organization} width={'250px'} key={i}/>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(OrganizationDetail);
