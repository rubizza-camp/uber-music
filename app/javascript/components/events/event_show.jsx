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
import OrganizationCard from "../organizations/organization_card";
import YandexMaps from "../shared/yandex_maps";
import Box from "@material-ui/core/Box";
import TypoGraphy from "@material-ui/core/Typography/Typography";

class EventShow extends React.Component {
  render() {
    const {event, current_user} = this.props;
    return (
      <div>
        <Grid container justify="center">
          <TypoGraphy component="h3">
            <Box fontSize="3.0em" fontWeight='100'>
              {event.name}
            </Box>
          </TypoGraphy>
        </Grid>
        
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Title content={"Время:"}/>
          <Grid container justify="space-around" spacing={2} style={{marginTop: '10px', marginBottom: '10px'}}>
            <Grid item>
              {event.start_time === null &&
              <TypoGraphy>
                <Box component='span' fontSize="21px" fontWeight="300">
                  Время начала отсутсвует
                </Box>
              </TypoGraphy>
              }
              <SmallText content={"Начало: " + event.start_time}/>
            </Grid>
            <Grid item>
              {event.end_time === null &&
              <TypoGraphy>
                <Box component='span' fontSize="21px" fontWeight="300">
                  Время окончания отсутсвует
                </Box>
              </TypoGraphy>
              }
              <SmallText content={"Конец: " + event.end_time}/>
            </Grid>
          </Grid>
          <hr/>
        </div>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Title content={"Описание Мероприятия:"}/>
          <Grid container style={{marginTop: '10px', marginBottom: '10px'}}>
            {event.description === null &&
            <TypoGraphy>
              <Box component='span' fontSize="21px" fontWeight="300">
                Описание отсутвует
              </Box>
            </TypoGraphy>
            }
            <Description content={event.description}/>
          </Grid>
        </div>
        <hr/>
        <Title content="Фотогалерея:"/><br/><br/>
        <Grid container justify="center" direction="column" alignItems="center">
          <Grid item>
            {event.images.length === 0 &&
            <TypoGraphy>
              <Box component='span' fontSize="21px" fontWeight="300">
                Фотографии отсутсвуют
              </Box>
            </TypoGraphy>
            }
            <ImageCarousel slidesToShow={1} slidesToScroll={1} width={"900px"} height={"400px"}
                           images={event.images.map((image) => image.image_url)}/>
          </Grid>
        </Grid>
        <hr/>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Title content={"Место проведения: "}/>
          <Grid container justify="center" style={{marginTop: '10px', marginBottom: '10px'}}>
            <YandexMaps width={"900px"} height={"300px"} zoom={17}
                        center={[event.place.longitude, event.place.latitude]}
                        places={[event.place]}/>
          </Grid>
          <hr/>
        </div>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Title content={"Организации:"}/>
          <Grid container justify="center" style={{marginTop: '10px', marginBottom: '10px'}}>
            {event.approved_organizations.length === 0 &&
            <TypoGraphy>
              <Box component='span' fontSize="21px" fontWeight="300">
                Организации отсутсвуют
              </Box>
            </TypoGraphy>
            }
            {event.approved_organizations.map((organization, i) => {
              return (
                <Grid item key={i} xs={12} sm={6} md={3} lg={3} xl={2}>
                  <OrganizationCard organization={organization}/>
                </Grid>
              )
            })}
          </Grid>
        </div>
        <Grid item xs={2}>
          <UpdateButtons current_user={current_user} user_ids={event.organizations_user_ids}/>
        </Grid>
      </div>
    );
  }
}

EventShow.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(EventShow);
