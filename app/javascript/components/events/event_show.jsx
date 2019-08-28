import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Description from "../shared/description";
import SmallText from "../shared/small_text";
import ImageCarousel from "../shared/image_carousel";
import Title from "../shared/title"
import Grid from '@material-ui/core/Grid';
import UpdateButtons from "./update_buttons"

class EventShow extends React.Component {
  render() {
    const {classes, event, current_user} = this.props;
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <Grid container justify="center">
              <Title content={event.name}/>
            </Grid>
            <hr/>
            <Grid container>
              <Description content={event.description}/>
            </Grid>
            <hr/>
            <Grid container>
              {event.approved_organizations.map((organization, i) => {
                return (
                  <SmallText key={i} content={"Организации: " + organization.name}/>
                )
              })}
            </Grid>
            <hr/>
            <Grid container>
              <SmallText content={"Место проведения: " + event.name}/>
            </Grid>
            <hr/>
            <Grid container justify="space-around">
              <Grid item>
                <SmallText content={"Начало: " + event.start_time}/>
              </Grid>
              <Grid item>
                <SmallText content={"Конец: " + event.end_time}/>
              </Grid>
            </Grid>
            <hr/>
            <Grid container justify="center" direction="column" alignItems="center">
              <Grid item>
                <Title content="Фотогалерея"/>
              </Grid>
              <Grid item>
                <ImageCarousel slidesToShow={1} slidesToScroll={1} width={"600px"} height={"400px"}
                               images={event.images.length ?
                                       event.images.map((image) => image.image_url) :
                                       "/assets/default_event.jpeg"}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <UpdateButtons current_user={current_user} user_ids={event.organizations_user_ids}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventShow.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(EventShow);
