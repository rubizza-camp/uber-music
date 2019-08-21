import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Parallax from "../shared/parallax.jsx";
import Grid from '@material-ui/core/Grid';
import MyImage from "../shared/image";
import Title from "../shared/title";
import SmallText from "../shared/small_text";
import Description from "../shared/description";
import EventsCard from "../shared/card_events";
import ImageCarousel from "../shared/image_carousel";

class PlaceShow extends React.Component {
  render() {
    const {classes, place} = this.props;
    return (
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <React.Fragment>
              <Grid container>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                  <MyImage width={"90%"} height={"90%"} src={"https://upload.wikimedia.org/wikipedia/ru/e/ef/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82_%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%B0_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%9A%D0%B0%D1%80%D1%82%D1%8B.png"}></MyImage>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                  <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                    <Grid item xs={10} sm={11} md={11} lg={12} xl={12}>
                      <Title content={place.name}></Title>
                    </Grid>
                    <p>
                      <Grid item xs={10} sm={11} md={11} lg={12} xl={12}>
                        <SmallText content={place.address}></SmallText>
                      </Grid>
                    </p>
                    <p>
                      <Grid item xs={10} sm={11} md={11} lg={12} xl={12}>
                        <Description content={place.description}/>
                       </Grid>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <hr/>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Title content={"Фотогалерея"}></Title>
                </Grid>
                <Grid item>
                  <ImageCarousel slidesToShow={1} slidesToScroll={1} width={"600px"} height={"400px"} images={place.images.map((image) => image.url.url)}></ImageCarousel>
                </Grid>
              </Grid>
              <hr/>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Title content={"Ближайшие мероприятия"}></Title>
                </Grid>
                <Grid container>
                  {
                    place.events.map((event) =>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
                        <EventsCard name={event.name} address={place.address} start_time={event.start_time} end_time={event.end_time} image={event.images[0].url.url}></EventsCard>
                      </Grid>
                    )
                  }
                </Grid>
              </Grid>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(PlaceShow);
