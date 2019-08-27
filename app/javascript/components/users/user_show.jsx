import React from "react";
import PropTypes from "prop-types";
import MyImage from "../shared/image";
import Grid from "@material-ui/core/Grid";
import Title from "../shared/title";
import SmallText from "../shared/small_text";
import Badge from "../shared/badge";
import OrganizationCard from "../organizations/organization_card";

class UserShowLandingPage extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        <Grid container direction="column" alignItems="stretch">
          <div style={{margin: 20}}>
            <Grid container justify="center">
              <Grid item>
                <MyImage src={user.image ? user.image_url : "/assets/default_avatar.jpg"}
                         width={250} height={250}/>
              </Grid>
            </Grid>
          </div>
          <div style={{margin: 20}}>
            <Grid container justify="center">
              <Grid item>
                {user.nickname === "" &&
                <Title content={"No title"}/>
                }
                <Title content={user.nickname}/>
              </Grid>
            </Grid>
          </div>
          <div style={{margin: 20}}>
            <Grid container justify="center">
              <Grid item>
                {user.first_name === "" &&
                <SmallText content={"No name"}/>
                }
                <SmallText content={user.first_name + " " + user.second_name}/>
              </Grid>
            </Grid>
          </div>
          <div style={{margin: 20}}>
            <Grid container justify="center">
              <Grid item>
                <SmallText content={user.email}/>
              </Grid>
            </Grid>
          </div>
          <Title content={"Musician Skill:"}/>
          <div style={{margin: 20}}>
            <Grid container>
              <Grid item xs={6}>
                <Grid container spacing={2}>
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
              <Grid item xs={6}>
                <Grid container spacing={3}>
                  {user.pending_musician_skills.length === 0 &&
                  <SmallText content={"Нет музыкальных навыков"}/>
                  }
                  {user.pending_musician_skills.map((pending_musician_skill, i) =>
                    <Grid item key={i}>
                      <Badge> <SmallText content={pending_musician_skill.name}/></Badge>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </div>
          <Title content={"Genres:"}/>
          <div style={{margin: 10}}>
            <Grid container direction="row" alignItems="flex-start">
              <Grid container justify="center" spacing={3}>
                {user.genres.length === 0 &&
                <SmallText content={"Выбранные жанры отсутвстуют"}/>
                }
                {user.genres.map((genre) =>
                  <Grid item>
                    <Badge color="rose"> <SmallText content={genre.name}/></Badge>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <hr/>
        <br/>
        <Title content={"Organizations:"}/>
        <br/>
        <Grid container direction="row" justify="center" alignItems="stretch" spacing={3}>
          {user.organizations.map((organization, i) =>
            <Grid item key={i}>
              <OrganizationCard organization={organization} width={200}/>
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
