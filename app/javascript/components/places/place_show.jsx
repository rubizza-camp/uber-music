import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from '@material-ui/core/Grid';
import Title from "../shared/title";
import SmallText from "../shared/small_text";
import Description from "../shared/description";
import EventCard from "../shared/event_card";
import ImageCarousel from "../shared/image_carousel";
import YandexMaps from "../shared/yandex_maps";
import Box from "@material-ui/core/Box";
import TypoGraphy from "@material-ui/core/Typography/Typography";

function make_url(id) {
  return '/events/' + id
}

class PlaceShow extends React.Component {
  render() {
    const {place, events} = this.props;
    return (
      <div>
        <React.Fragment>
          <div style={{marginTop: '20px', marginBottom: '20px'}}>
            <Grid container>
              <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                <YandexMaps width={"90%"} height={"90%"} zoom={17} center={[place.longitude, place.latitude]}
                            places={[place]}/>
              </Grid>
              <Grid item xs={7} sm={7} md={5} lg={5} xl={5} style={{marginBottom:'300px'}}>
                <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                  <Grid item xs={10} sm={11} md={11} lg={12} xl={12}>
                    <TypoGraphy component="h3">
                      <Box fontSize="3.0em" fontWeight='100'>
                        {place.name}
                      </Box>
                    </TypoGraphy>
                  </Grid>
                  <Grid item xs={10} sm={11} md={11} lg={12} xl={12}>
                    <SmallText content={place.address}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          <hr/>
          </div>
          <div style={{marginTop: '20px', marginBottom: '20px'}}>
            <Title content={"Описание Места:"}/>
            <Grid container direction="column" style={{marginTop: '10px', marginBottom: '10px'}}>
              <Grid item>
                <Description content={place.description}/>
              </Grid>
            </Grid>
          </div>
          <hr/>
          <div style={{marginTop: '20px', marginBottom: '20px'}}>
            <Grid item>
              <Title content={"Ближайшие мероприятия:"}/>
            </Grid>
            <Grid container alignItems="center" justify="center" style={{marginTop: '10px', marginBottom: '10px'}}>
              {
                events.map((event, i) =>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={i}>
                    <EventCard event={event} link={make_url(event.id)}/>
                  </Grid>
                )
              }
            </Grid>
          </div>
          <hr/>
          <div style={{marginTop: '20px', marginBottom: '20px'}}>
            <Title content={"Фотогалерея:"}/>
            <Grid container direction="column" alignItems="center" style={{marginTop: '10px', marginBottom: '10px'}}>
              <Grid item>
                <ImageCarousel slidesToShow={1} slidesToScroll={1} width={"900px"} height={"400px"}
                               images={place.images.map((image) => image.image_url)}/>
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(PlaceShow);
