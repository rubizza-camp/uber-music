import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import ImageCarousel from "../shared/image_carousel";
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import EventCard from '../shared/card_event'
import MyImage from "../shared/image";
import OrganizationTitle from './organization_title'

class OrganizationDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        organization_name: props.organization.name,
        organization_description: props.organization.description,
        organization_id:  props.organization.id,
        approved_events: props.organization.approved_events,
        users: props.organization.users,
        images: props.organization.images.map((image)=>image.url.url),
        current_user: props.current_user
    };}
    render() {
        const {classes} = this.props;
        return (
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <Grid direction="column" justify="center" alignItems="center" xs={11} md={12}>
                <Grid item>
                  <OrganizationTitle current_user={this.state.current_user} users={this.state.users}
                                     organization_name={this.state.organization_name}/>
                </Grid>
                <Grid item>
                  <TypoGraphy>
                    <Box component='text' fontSize="21px" fontWeight="300">
                      Proident Lorem mollit irure non labore anim voluptate nostrud anim. Cupidatat eu est dolore consequat adipisicing cillum velit aliquip magna. Voluptate adipisicing proident proident sit dolore sit dolor. Duis commodo aliqua excepteur elit dolore id proident.
                      Esse proident reprehenderit ipsum nisi eiusmod ipsum consectetur amet consequat dolor veniam laborum sit quis. Dolor nulla irure culpa non tempor sunt qui duis dolor Lorem sunt. Sint occaecat elit officia tempor excepteur anim. Eu minim esse irure Lorem cillum amet laboris ad sint adipisicing adipisicing. Anim elit amet mollit nisi tempor non.
                    </Box>
                  </TypoGraphy>
                </Grid>
                <br/>
                <Grid item>
                  <ImageCarousel images={this.state.images} slidesToShow={1} slidesToScroll={1} width={'100%'} height={'50%'}></ImageCarousel>
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
                    {this.state.approved_events.map((event,i)=>
                      <Grid item xs={12} sm={6} md={4} >
                        <EventCard key={i} name={event.name} addres={'##'} start_time={event.start_time} end_time={event.end_time} src={event.images[0].url.url} link={'#'}></EventCard>
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
                  {this.state.users.map((user,i)=>
                    <Grid item>
                      <a href='#'>
                        <MyImage key={i} src={user.image.url.url} width={'300px'} height={'150px'}></MyImage>
                      </a>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </div>
          </div>
        );
    }
}

export default withStyles(landingPageStyle)(OrganizationDetail);