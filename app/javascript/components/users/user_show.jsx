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
  render() {
    const {classes} = this.props;
    console.log(this.props);
    return (
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            
            <Grid container direction="column" alignItems="stretch">
              <div style={{margin: 20}}>
                <Grid container justify="center">
                  <Grid item>
                    <MyImage src={this.props.user.image ? this.props.user.image.url.url : "/assets/default_avatar.jpg"}
                             width={250} height={250}/>
                  </Grid>
                </Grid>
              </div>
              
              <div style={{margin: 20}}>
                <Grid container justify="center">
                  <Grid item>
                    {this.props.user.nickname === "" &&
                    <Title content={"No title"}/>
                    }
                    <Title content={this.props.user.nickname}/>
                  </Grid>
                </Grid>
              </div>
              
              <div style={{margin: 20}}>
                <Grid container justify="center">
                  <Grid item>
                    {this.props.user.first_name === "" &&
                    <SmallText content={"No name"}/>
                    }
                    <SmallText content={this.props.user.first_name + " " + this.props.user.second_name}/>
                  </Grid>
                </Grid>
              </div>
  
              <div style={{margin: 20}}>
              <Grid container justify="center">
                <Grid item>
                  <SmallText content={this.props.user.email}/>
                </Grid>
              </Grid>
              </div>
              
              <div style={{margin: 20}}>
                <Grid container direction="row" alignItems="flex-start">
                  
                  <Grid container xs={12} sm={6} justify="center" spacing={3}>
                    {this.props.user.approved_musician_skills.length === 0 &&
                    <SmallText content={"No approved skill"}/>
                    }
                    {this.props.user.approved_musician_skills.map((approved_musician_skill) =>
                      <Grid item>
                        <Badge color="rose"> <SmallText content={approved_musician_skill.name}/></Badge>
                      </Grid>
                    )}
                  </Grid>
  
                  <Grid container xs={12} sm={6} justify="center" spacing={3}>
                    {this.props.user.pending_musician_skills.length === 0 &&
                    <SmallText content={"No pending skill"}/>
                    }
                    {this.props.user.pending_musician_skills.map((pending_musician_skill) =>
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
            
            <Grid container direction="row" justify="center" alignItems="stretch" >
              <Grid container justify="center" spacing={6}>
                {this.props.user.organizations.length === 0 &&
                <SmallText content={"No organization"}/>
                }
                {this.props.user.organizations.map((organization) =>
                  <Grid item>
                    <MyImage
                      src={organization.images[0] ? organization.images[0].url.url : "/assets/default_avatar.jpg"}
                      width={200} height={200}/>
                    <Title content={organization.name}/>
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