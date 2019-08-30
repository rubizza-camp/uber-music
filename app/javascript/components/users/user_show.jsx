import React from "react";
import PropTypes from "prop-types";
import MyImage from "../shared/image";
import Grid from "@material-ui/core/Grid";
import Title from "../shared/title";
import SmallText from "../shared/small_text";
import Badge from "../shared/badge";
import OrganizationCard from "../organizations/organization_card";
import Box from "@material-ui/core/Box";
import TypoGraphy from "@material-ui/core/Typography/Typography";

class UserShowLandingPage extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        <Grid container direction="column" alignItems="stretch">
          <div style={{margin: 10}}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6}>
                <center><MyImage src={user.image ? user.image_url : "/assets/default_avatar.jpg"}
                                 width={250} height={250}/></center>
              </Grid>
              <Grid item xs={6} style={{textAlign: 'center'}}>
                {user.nickname === "" &&
                <Title content={"Нет Прозвища"}/>
                }
                <TypoGraphy component="h3">
                  <Box fontSize="2.5em" fontWeight={400}>
                    {user.nickname}
                  </Box>
                </TypoGraphy>
                <br/>
                
                {user.first_name === "" &&
                <Title content={"Нет Имени и Фамилии"}/>
                }
                <Title content={user.first_name + " " + user.second_name}/>
                <br/>
                <Title content={user.email}/>
              </Grid>
            </Grid>
            <br/>
            <hr/>
          </div>
          <Title content={"Музыкальные навыки:"}/>
          <div>
            <Grid container>
              <Grid item xs={6}>
                <Grid container spacing={2} style={{margin: '10px'}}>
                  {user.approved_musician_skills.length === 0 &&
                  <SmallText content={"Нет подвержденных музыкальных навков"}/>
                  }
                  {user.approved_musician_skills.map((approved_musician_skill, i) =>
                    <Grid item key={i}>
                      <Badge color="rose"> <SmallText content={approved_musician_skill.name}/></Badge>
                    </Grid>
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2} style={{margin: '10px'}}>
                  {user.pending_musician_skills.length === 0 &&
                  <SmallText content={"Нет выбранных музыкальных навыков"}/>
                  }
                  {user.pending_musician_skills.map((pending_musician_skill, i) =>
                    <Grid item key={i}>
                      <Badge> <SmallText content={pending_musician_skill.name}/></Badge>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <hr/>
          </div>
          <Title content={"Жанры:"}/>
          <div style={{margin: 10}}>
            <Grid container direction="row" alignItems="flex-start">
              <Grid container justify="center" spacing={3}>
                {user.genres.length === 0 &&
                <SmallText content={"Выбранные жанры отсутвстуют"}/>
                }
                {user.genres.map((genre, i) =>
                  <Grid item key={i}>
                    <Badge color="rose"> <SmallText content={genre.name}/></Badge>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <hr/>
        <Title content={"Организации:"}/>
        <br/>
        <Grid container direction="row" justify="center" alignItems="stretch" spacing={3}>
          {user.organizations.map((organization, i) =>
            <Grid item key={i} xs={12} sm={6} md={2} lg={2} xl={2}>
              <OrganizationCard organization={organization}/>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

UserShowLandingPage.propTypes = {
  classes: PropTypes.object
};

export default (UserShowLandingPage);
