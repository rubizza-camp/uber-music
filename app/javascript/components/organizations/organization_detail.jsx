import React from "react";
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import ImageCarousel from "../shared/image_carousel";
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import EventCard from '../shared/event_card'
import MyImage from "../shared/image";
import OrganizationTitle from './organization_title'
import Title from "../shared/title";

class OrganizationDetail extends React.Component {
  render() {
    const {organization, current_user, approved_events} = this.props;
    return (
      <div>
        <Grid container direction="row">
          <Grid item xs={12}>
            <OrganizationTitle current_user={current_user} users={organization.users}
                               organization_name={organization.name} organization_id={organization.id}/>
          </Grid>
        </Grid>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Grid item>
            <Title content={'Описание:'}/>
          </Grid>
          <Grid container direction="row" style={{marginTop: '10px', marginBottom: '10px'}}>
            <Grid item>
              <TypoGraphy>
                <Box component='span' fontSize="21px" fontWeight="300">
                  {organization.description}
                </Box>
              </TypoGraphy>
              {organization.description === null &&
              <TypoGraphy>
                <Box component='span' fontSize="21px" fontWeight="300">
                  Описание отсутсвует
                </Box>
              </TypoGraphy>
              }
            </Grid>
          </Grid>
        </div>
        <hr/>
        
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Grid item>
            <Title content={'Фотографии:'}/>
          </Grid>
          <Grid container direction="row" style={{marginTop: '10px', marginBottom: '10px'}}>
            <Grid item xs={12} md={12}>
              <ImageCarousel images={organization.images.map((image) => image.image_url)} slidesToShow={1}
                             slidesToScroll={1} width={'100%'} height={'400px'}/>
              {organization.images.length === 0 &&
              <TypoGraphy>
                <Box component='span' fontSize="21px" fontWeight="300">
                  Фотографии отсутсвуют
                </Box>
              </TypoGraphy>
              }
            </Grid>
          </Grid>
        </div>
        <hr/>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Grid item>
            <Title content={'Наши мероприятия:'}/>
          </Grid>
          <Grid container direction="row" style={{marginTop: '10px', marginBottom: '10px'}}>
            <Grid container direction="row" justify="center" alignItems="stretch">
              {approved_events.length === 0 &&
              <TypoGraphy>
                <Box component='span' fontSize="21px" fontWeight="300">
                  Мероприятия отсутсвуют
                </Box>
              </TypoGraphy>
              }
              {approved_events.map((event, i) =>
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <EventCard key={i} event={event} link={`/events/${event.id}`}/>
                </Grid>
              )}
            </Grid>
          </Grid>
        </div>
        <hr/>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Grid item>
            <Title content={'Наши музыканты:'}/>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" spacing={4}
                style={{marginTop: '10px', marginBottom: '10px'}}>
            {organization.users.map((user, i) =>
              <Grid item key={i}>
                <a href={`/users/${user.id}`}>
                  <MyImage
                    src={user.image ? user.image_url : "/assets/default_avatar.jpg"}
                    width={'300px'}
                    height={'150px'}
                  />
                </a>
              </Grid>
            )}
            {organization.users.length === 0 &&
            <TypoGraphy>
              <Box component='span' fontSize="21px" fontWeight="300">
                Музыканты отсутсвуют
              </Box>
            </TypoGraphy>
            }
          </Grid>
        </div>
      </div>
    
    );
  }
}

export default withStyles(landingPageStyle)(OrganizationDetail);
