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
                <MyImage src={user.image ? user.image.url.url : "/assets/default_avatar.jpg"}
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
            <Grid container direction="row" alignItems="flex-start">
              
              <Grid container xs={12} sm={6} justify="center" spacing={3}>
                {user.approved_musician_skills.length === 0 &&
                <SmallText content={"No approved skill"}/>
                }
                {user.approved_musician_skills.map((approved_musician_skill) =>
                  <Grid item>
                    <Badge color="rose"> <SmallText content={approved_musician_skill.name}/></Badge>
                  </Grid>
                )}
              </Grid>
              
              <Grid container xs={12} sm={6} justify="center" spacing={3}>
                {user.pending_musician_skills.length === 0 &&
                <SmallText content={"No pending skill"}/>
                }
                {user.pending_musician_skills.map((pending_musician_skill) =>
                  <Grid item>
                    <Badge> <SmallText content={pending_musician_skill.name}/></Badge>
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
          {user.organizations.map((organization) =>
            <Grid item>
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
