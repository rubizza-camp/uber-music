import React from "react";
import Grid from '@material-ui/core/Grid';
import MyImage from '../shared/image'
import Title from '../shared/title'
import UserCarousel from './users_carusel'
import Description from '../shared/description'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../../../assets/javascripts/components/shared/landingPage";
import ImageCarousel from "../shared/image_carousel";
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import EventCard from '../shared/card_event'

class OrganizationDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  organizations_name: props.organization_name,
        organization_description: props.organization_description,
        organization_id:  props.organization_id,
        organization_users: props.organization_users,
        approved_events: props.approved_events,
        users: props.users,
        images: ['https://www.irishtimes.com/polopoly_fs/1.3858190.1555052810!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
                  'https://i.ytimg.com/vi/UpbGRJZqw4Q/maxresdefault.jpg',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gCuZxzyHY4ouOfI-6WHrO6foCxKPI4z_tDtttsJzNbpGKMzx',
                  'https://images.vexels.com/media/users/3/150668/raw/e2f12f7d920860489987a7b54dedd853-radiohead-logo.jpg'
                ]
      };
    }
    render() {
        const {classes} = this.props;
        return (
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <br/>
              <br/>
              <br/>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <TypoGraphy  component="h3">
                    <Box fontSize="3.3em" fontWeight={'100'}>
                        {this.state.organizations_name}
                    </Box>
                  </TypoGraphy>
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
                  <ImageCarousel images={this.state.images} slidesToShow={1} slidesToScroll={1} width={'700px'} height={'400px'}></ImageCarousel>
                </Grid>
                <br/>
                <br/>
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
                  <Grid container direction="row" justify="flex-center" alignItems="center">
                    {this.state.approved_events.map((event,i)=> 
                      <Grid item xs={4}>
                        <EventCard key={i} name={event.name} addres={'##'} start_time={event.start_time} end_time={event.end_time} link={'#'}></EventCard>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        );
    }
}


OrganizationDetail.propTypes = {
    classes: PropTypes.object
};

export default withStyles(landingPageStyle)(OrganizationDetail);