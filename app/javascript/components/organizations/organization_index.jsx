import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import OrganizationCard from './organization_card'
import Grid from '@material-ui/core/Grid'
import MediumButton from "../shared/button";
import Search from "../shared/search/organization_search";

class OrganizationDetail extends React.Component {
  render() {
    const { organizations} = this.props;
    return (
      <div>
        <MediumButton content={'Создать'} href = {`/organizations/new`}/>
        <br/><br/>
        <Search organizations={organizations}/>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(OrganizationDetail);
