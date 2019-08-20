import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../shared/landingPage";
import Grid from "@material-ui/core/Grid";
import UserCard from "../shared/user_card.jsx";
import SearchField from "react-search-field";


class UserIndexLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(props.users),
    };
  }
  
  render() {
    const {classes} = this.props;
    return (
      <div>
        <div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <Grid container direction="row" justify="center" alignItems="stretch">
                {this.state.users.reverse().map((user, i) =>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
                    <UserCard key={i} name={user.first_name + " " + user.second_name}
                              nickname={user.nickname} email={user.email} image={""} link={'/users/' + (i + 1)}/>
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