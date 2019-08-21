import React from "react";
import Grid from '@material-ui/core/Grid';
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MediumButton from '../shared/button'

class OrganizationTitle extends React.Component {
  current_user_is_ovner(){
    if(JSON.stringify(this.props.users).includes(JSON.stringify(this.props.current_user)))
    {
      return true
    }
    return false
  }
  render() {
    if(this.current_user_is_ovner()){
      return (
        <Grid container direction="row" justify="center" alignItems="center">
          <OrganizationTitleName organization_name={this.props.organization_name}/>
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
          <Grid item>
            <TypoGraphy>
              <Box component='text' fontSize="3em" fontWeight="300">
                {this.props.organization_name} 
              </Box>
            </TypoGraphy>
          </Grid>
        </Grid>
      );
    }
  }
}

export default OrganizationTitle;
