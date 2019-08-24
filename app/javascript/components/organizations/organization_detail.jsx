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
        <Grid direction="column" justify="center" alignItems="center" xs={11} md={12}>
          <Grid item>
            <OrganizationTitle current_user={current_user} users={organization.users}
                               organization_name={organization.name}/>
          </Grid>
          <Grid item>
            <TypoGraphy>
              <Box component='text' fontSize="21px" fontWeight="300">
                {organization.description}
              </Box>
            </TypoGraphy>
          </Grid>
          <br/>
          <Grid item>
            <ImageCarousel images={organization.images.map((image) => image.url.url)} slidesToShow={1}
                           slidesToScroll={1} width={'100%'} height={'50%'}></ImageCarousel>
          </Grid>
          <Grid item>
            <TypoGraphy component="h3">
              <Box fontSize="21px" fontWeight='300'>
                For each event we carry out a program! Every holiday is important to us.
                Nisi nisi magna deserunt tempor velit nulla ad.
              </Box>
            </TypoGraphy>
          </Grid>
          <br/>
          <br/>
          <Grid item>
            <Grid container direction="row" justify="center" alignItems="stretch">
              {organization.approved_events.map((event, i) =>
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <EventCard key={i} name={event.name} addres={'##'} start_time={event.start_time}
                             end_time={event.end_time} src={event.images[0].url.url} link={'#'}></EventCard>
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
                <a href='#'>
                  <MyImage key={i} src={user.image.url.url} width={'300px'} height={'150px'}></MyImage>
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
