import React from "react";
import Grid from '@material-ui/core/Grid';
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

class OrganizationTitleName extends React.Component {
  render() {
    const {organization_name} = this.props
    return (
      <Grid item md={6} xs={12}>
        <TypoGraphy>
          <Box component='text' fontSize="3em" fontWeight="300">
            {organization_name}
          </Box>
        </TypoGraphy>
      </Grid>
    );
  }
}

export default OrganizationTitleName;
