import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/style/landingPage";
import Grid from "@material-ui/core/Grid";
import UserCard from "./user_card.jsx";

class UserIndexLandingPage extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="stretch" spacing={1}>
          {users.map((user, i) =>
            <Grid item>
              <UserCard key={i} user={user} link={'/users/' + user.id}/>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

UserIndexLandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(UserIndexLandingPage);
