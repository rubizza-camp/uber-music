import React from "react";
import Grid from '@material-ui/core/Grid';
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MediumButton from '../shared/button'
import OrganizationTitleName from './organization_title_name'

class OrganizationTitle extends React.Component {
  current_user_is_owner(users, current_user){
    return users.map((user)=> user.id).includes(current_user.id)
  }
  render() {
    const {users, current_user, organization_name} = this.props
    if(this.current_user_is_owner(users, current_user)){
      return (
        <Grid container direction="row" justify="center" alignItems="center">
          <OrganizationTitleName organization_name={organization_name}/>
          <Grid item >
            <Grid container direction="row" justify="flex-end" alignItems="center" spacing={2}>
              <Grid item>
                <MediumButton content={'Edit'}/>
              </Grid>
              <Grid>
                <MediumButton content={'Delte'}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
      }
    else{
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <OrganizationTitleName organization_name={organization_name}/>
        </Grid>
      );
    }
  }
}

export default OrganizationTitle;
