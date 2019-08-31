import React from "react";
import Grid from '@material-ui/core/Grid';
import MediumButton from '../shared/button'
import OrganizationTitleName from './organization_title_name'

class OrganizationTitle extends React.Component {
  current_user_is_owner(users, current_user) {
    return current_user ? users.map((user, i) => user.id).includes(current_user.id) : false
  }
  
  render() {
    const {users, current_user, organization_name, organization_id} = this.props;
    if (this.current_user_is_owner(users, current_user)) {
      return (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}>
            <MediumButton content={'Редактировать'} href={`/organizations/${organization_id}/edit`}/>
          </Grid>
          <Grid item xs={10}>
            <Grid container direction="row" justify="center" alignItems="center">
              <OrganizationTitleName organization_name={organization_name}/>
            </Grid>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <OrganizationTitleName organization_name={organization_name}/>
        </Grid>
      );
    }
  }
}

export default OrganizationTitle;
