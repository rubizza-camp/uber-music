import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from '@material-ui/core/Grid';
import MyImage from "../shared/image";
import Title from "../shared/title";
import Description from "../shared/description";
import EventsCard from "../shared/card_events";
import MyStepper from "./stepper";

class WelcomePage extends React.Component {
  render() {
    const {classes, places, events} = this.props;
    return (
      <div>
        <React.Fragment>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Title content={"О проекте:"}></Title>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Description
                content={"Lorem ipsum dolor amet cloud bread artisan authentic live-edge. Wolf poke gluten-free hella. Authentic skateboard shaman vice, organic health goth direct trade portland. Try-hard banjo lo-fi tattooed migas tilde pok pok put a bird on it edison bulb post-ironic direct trade sustainable. Tbh photo booth pour-over leggings truffaut, subway tile PBR&B fingerstache tote bag austin echo park everyday carry. Portland bicycle rights meggings banjo small batch. Dreamcatcher single-origin coffee yuccie kinfolk, asymmetrical jianbing drinking vinegar DIY kickstarter organic photo booth chillwave etsy. Synth ennui health goth cornhole. Cold-pressed waistcoat meggings pour-over. Tumeric adaptogen butcher hella trust fund blog drinking vinegar williamsburg green juice PBR&B cray chambray shoreditch. Flannel sriracha cronut af, brunch taiyaki truffaut chicharrones hoodie tumeric vinyl scenester succulents chartreuse. Tacos messenger bag neutra wolf tilde. Migas vexillologist organic cloud bread, mixtape cred hell of. Hoodie plaid fanny pack iPhone cliche selfies literally glossier chambray williamsburg banjo meh chillwave gastropub kombucha. Tote bag adaptogen hella gentrify, humblebrag irony pitchfork trust fund quinoa. Iceland brunch hoodie intelligentsia, succulents occupy put a bird on it asymmetrical locavore live-edge cliche taxidermy bushwick banh mi sriracha. Kombucha hella hexagon put a bird on it flexitarian cardigan copper mug, kinfolk direct trade."}/>
            </Grid>
          </Grid>
          <hr/>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Title content={"Ближайшие мероприятия"}></Title>
            </Grid>
            <Grid container>
              {
                events.map((event) =>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
                    <EventsCard name={event.name} start_time={event.start_time} end_time={event.end_time}
                                image={event.first_image_url}></EventsCard>
                  </Grid>
                )
              }
            </Grid>
          </Grid>
          <hr/>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Title content={"Карта мест выступлений"}></Title>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <MyImage width={"90%"} height={"90%"}
                       src={"https://upload.wikimedia.org/wikipedia/ru/e/ef/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82_%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%B0_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%9A%D0%B0%D1%80%D1%82%D1%8B.png"}></MyImage>
            </Grid>
          </Grid>
          <hr/>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Title content={"Как принять участие?"}></Title>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="column" justify="center" alignItems="stretch">
                <Grid item>
                  <MyStepper></MyStepper>
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
