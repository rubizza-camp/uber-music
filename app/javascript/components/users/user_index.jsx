import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/landingPage";
import Grid from "@material-ui/core/Grid";
import UserCard from "./user_card.jsx";

class UserIndexLandingPage extends React.Component {
  render() {
    const {classes, users} = this.props;
    return (
      <div>
        <div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <Grid container direction="row" justify="center" alignItems="stretch" spacing={1}>
                {users.map((user, i) =>
                  <Grid item >
                    <UserCard key={i} user={user} link={'/users/' + user.id }/>
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserIndexLandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(UserIndexLandingPage);
