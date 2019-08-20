import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/landingPage";
import MyImage from "../shared/image";
import Grid from "@material-ui/core/Grid";
import Title from "../shared/title";
import SmallText from "../shared/small_text";
import Badge from "../shared/badge";

class UserShowLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(props.user)
    };
  }
  
  
  render() {
    const {classes} = this.props;
    debugger;
    return (
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            
            <Grid container direction="column" alignItems="stretch">
              <div style={{margin: 20}}>
                <Grid container justify="center">
                  <Grid item>
                    <MyImage src={this.state.user.image.url.url === "" ?
                      "/assets/default_avatar.jpg"
                      : this.state.image} width={250} height={250}/>
                  </Grid>
                </Grid>
              </div>
              
              <div style={{margin: 20}}>
                <Grid container justify="center">
                  <Grid item>
                    {this.state.user.nickname === "" &&
                    <Title content={"No title"}/>
                    }
                    <Title content={this.state.user.nickname}/>
                  </Grid>
                </Grid>
              </div>
              
              <div style={{margin: 20}}>
                <Grid container justify="center">
                  <Grid item>
                    {this.state.user.first_name === "" &&
                    <SmallText content={"No name"}/>
                    }
                    <SmallText content={this.state.user.first_name + " " + this.state.user.second_name}/>
                  </Grid>
                </Grid>
              </div>
  
              <div style={{margin: 20}}>
              <Grid container justify="center">
                <Grid item>
                  <SmallText content={this.state.user.email}/>
                </Grid>
              </Grid>
              </div>
              
              <div style={{margin: 20}}>
                <Grid container direction="row" alignItems="flex-start">
                  
                  <Grid container xs={12} sm={6} justify="center" spacing={3}>
                    {this.state.user.approved_musician_skills.length === 0 &&
                    <SmallText content={"No approved skill"}/>
                    }
                    {this.state.user.approved_musician_skills.map((approved_musician_skill) =>
                      <Grid item>
                        <Badge color="rose"> <SmallText content={approved_musician_skill.name}/></Badge>
                      </Grid>
                    )}
                  </Grid>
  
                  <Grid container xs={12} sm={6} justify="center" spacing={3}>
                    {this.state.user.pending_musician_skills.length === 0 &&
                    <SmallText content={"No pending skill"}/>
                    }
                    {this.state.user.pending_musician_skills.map((pending_musician_skill) =>
                      <Grid item>
                        <Badge> <SmallText content={pending_musician_skill.name}/></Badge>
                      </Grid>
                    )}
                  </Grid>
                
                </Grid>
              </div>
            </Grid>
            
            <br/><br/>
            
            <Title content={"Organizations:"}/>
            
            <br/><br/>
            
            <Grid container direction="row" justify="center" alignItems="stretch">
              <Grid container justify="center">
                {this.state.user.organizations.length === 0 &&
                <SmallText content={"No organization"}/>
                }
                {this.state.user.organizations.map((organization) =>
                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <MyImage
                      src={"/assets/default_avatar.jpg"}
                      width={200} height={200}/>
                    <SmallText content={organization.name}/>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

UserShowLandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(UserShowLandingPage);