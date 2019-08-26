import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from '@material-ui/core/Grid';
import MyImage from "../shared/image";
import Title from "../shared/title";
import SmallText from "../shared/small_text";
import Description from "../shared/description";
import EventsCard from "../shared/card_events";
import ImageCarousel from "../shared/image_carousel";
import YandexMaps from "../shared/yandex_maps";

function make_url(id) {
  return '/events/' + id
}

class PlaceShow extends React.Component {
  render() {
    const {place} = this.props;
    return (
      <div>
        <React.Fragment>
          <Grid container>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <YandexMaps width={"90%"} height={"90%"} zoom={17} center={[place.longitude, place.latitude]}
                          places={[place]}/>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                <Grid item xs={10} sm={11} md={11} lg={12} xl={12}>
                  <Title content={place.name}/>
                </Grid>
                <Grid item xs={10} sm={11} md={11} lg={12} xl={12}>
                  <SmallText content={place.address}/>
                </Grid>
                <Grid item xs={10} sm={11} md={11} lg={12} xl={12}>
                  <Description content={place.description}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr/>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Title content={"Фотогалерея"}/>
            </Grid>
            <Grid item>
              <ImageCarousel slidesToShow={1} slidesToScroll={1} width={"600px"} height={"400px"}
                             images={place.images.map((image) => image.url.url)}/>
            </Grid>
          </Grid>
          <hr/>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Title content={"Ближайшие мероприятия"}/>
            </Grid>
            <Grid container>
              {
                place.events.map((event, i) =>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={i}>
                    <EventsCard name={event.name} address={place.address} start_time={event.start_time}
                                end_time={event.end_time} image={event.images[0].url.url}
                                link={make_url(event.id)} key={i}/>
                  </Grid>
                )
              }
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(PlaceShow);
