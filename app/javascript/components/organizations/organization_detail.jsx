import React from "react";
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import ImageCarousel from "../shared/image_carousel";
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import EventCard from '../shared/card_event'
import MyImage from "../shared/image";
import OrganizationTitle from './organization_title'

class OrganizationDetail extends React.Component {
  render() {
    const {organization, current_user} = this.props;
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid container direction="row">
            <Grid item xs={12}>
              <OrganizationTitle current_user={current_user} users={organization.users}
                                 organization_name={organization.name} organization_id={organization.id}/>
            </Grid>
          </Grid>
          
          <Grid container direction="row" spacing={3}>
            
            <Grid item>
              <TypoGraphy>
                <Box component='span' fontSize="21px" fontWeight="300">
                  {organization.description}
                </Box>
              </TypoGraphy>
            </Grid>
            <br/>
            
            
            <Grid item xs={11} md={12}>
              <ImageCarousel images={organization.images.map((image) => image.image_url)} slidesToShow={1}
                             slidesToScroll={1} width={'100%'} height={'50%'}/>
            </Grid>
            
            
            <Grid item>
              <TypoGraphy component="h3">
                <Box fontSize="21px" fontWeight='300'>
                  For each event we carry out a program! Every holiday is important to us.
                  Nisi nisi magna deserunt tempor velit nulla ad.
                </Box>
              </TypoGraphy>
            </Grid>
          
          </Grid>
          
          <br/>
          <br/>
          
          <Grid container direction="row">
            <Grid container direction="row" justify="center" alignItems="stretch">
              {organization.approved_events.map((event, i) =>
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <EventCard key={i} name={event.name} addres={'##'} start_time={event.start_time}
                             end_time={event.end_time} src={event.first_image_url} link={`/events/${event.id}`}/>
                </Grid>
              )}
            </Grid>
          </Grid>
          
          <Grid item>
            <TypoGraphy component="h3">
              <Box fontSize="3.0em" fontWeight='100'>
                Our musicians
              </Box>
            </TypoGraphy>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
            {organization.users.map((user, i) =>
              <Grid item key={i}>
                <a href={`/users/${user.id}`}>
                  <MyImage key={i} src={user.image_url} width={'300px'} height={'150px'}/>
                </a>
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
    
    );
  }
}

export default withStyles(landingPageStyle)(OrganizationDetail);
