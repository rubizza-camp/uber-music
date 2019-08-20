import React from "react";
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../../../assets/javascripts/components/shared/landingPage";
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MediumButton from '../shared/button'

class OrganizationTitle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  organization_name: props.organization_name,
                      current_user: props.current_user,
                      users: props.users
      };
    }

    render() {
      if(JSON.stringify(this.state.users).includes(JSON.stringify(this.state.current_user))){
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={6} xs={12}>
              <TypoGraphy>
                <Box component='text' fontSize="3em" fontWeight="300">
                  {this.state.organization_name}
                </Box>
              </TypoGraphy>
            </Grid>
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
                    {this.state.organization_name} 
                  </Box>
                </TypoGraphy>
              </Grid>
            </Grid>
          );
        }
    }
}

export default OrganizationTitle;