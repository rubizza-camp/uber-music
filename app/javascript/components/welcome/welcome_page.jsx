import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from '@material-ui/core/Grid';
import Title from "../shared/title";
import Description from "../shared/description";
import EventCard from "../shared/event_card";
import MyStepper from "./stepper";
import YandexMaps from "../shared/yandex_maps";
import TypoGraphy from "@material-ui/core/Typography/Typography";
import Box from "@material-ui/core/Box";

function make_url(id) {
  return 'events/' + id
}

class WelcomePage extends React.Component {
  render() {
    const {events, places} = this.props;
    return (
      <div>
        <React.Fragment>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12} style={{margin: 10}}>
              <Title content={"О проекте:"}/>
            </Grid>
            <Grid item xs={12}  style={{margin: 10}}>
              <TypoGraphy>
                <Box component='span' fontSize="21px" fontWeight="300">
                  ПЕШЕХОДКА - музыкальный проект, цель которого - обеспечить слушателя качественной живой музыкой, расширить музыкальный кругозор жителей города Минска и гостей столицы.
                  Проект включает в себя: фестиваль уличных музыкантов «Место под солнцем», форум «Звуки улиц» на территории Верхнего города и новый формат «Музыкальная карта Минска»
                </Box>
              </TypoGraphy>
            </Grid>
          </Grid>
          <hr/>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Title content={"Карта мест выступлений:"}/>
            </Grid>
            <Grid item xs={12} >
              <YandexMaps width={"90%"} height={"90%"} zoom={9} center={[places[0].longitude, places[0].latitude]} places={places}/>
            </Grid>
          </Grid>
          <hr/>
          <Grid container direction="column" alignItems="center">
            <Grid item style={{margin: 10}}>
              <Title content={"Ближайшие мероприятия:"}/>
            </Grid>
            <Grid container justify="center">
              {
                events.map((event, i) =>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={3} key={i}>
                    <EventCard event={event} link={make_url(event.id)}/>
                  </Grid>
                )
              }
              {events.length === 0 &&
              <Grid item >
                <TypoGraphy>
                  <Box component='span' fontSize="21px" fontWeight="300">
                    Нет ближайших мероприятий
                  </Box>
                </TypoGraphy>
              </Grid>
              }
            </Grid>
          </Grid>
          <hr/>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Title content={"Как принять участие?"}/>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="column" justify="center" alignItems="stretch">
                <Grid item>
                  <MyStepper/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(WelcomePage);
