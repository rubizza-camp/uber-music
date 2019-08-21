import React from 'react';
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "./dropdown";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "./navigation_button";
import Header from "./header";

import navbarsStyle from "../style/navbarsStyle";

class Navigation extends React.Component {
  render() {
    const {classes} = this.props;
    if (this.props.id) {
      return (
        <Header
          brand="Пешеходка"
          color="dark"
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Button1
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Button2
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  center
                  caret={false}
                  hoverColor="black"
                  buttonText={
                    <img
                      src={this.props.image ? this.props.image.url.url : "/assets/default_avatar.jpg"}
                      className={classes.img}
                      alt="profile"
                    />
                  }
                  buttonProps={{
                    className:
                      classes.navLink + " " + classes.imageDropdownButton,
                    color: "transparent"
                  }}
                  dropdownList={[
                    <a
                      href={"/users/" + this.props.id}
                      data-method="get"
                      className={classes.dropdownLink}
                    >
                      Me
                    </a>,
                    <a
                      href={"/"}
                      data-method="get"
                      className={classes.dropdownLink}
                    >
                      Edit Your Profile
                    </a>,
                    <a
                      href="/users/sign_out"
                      data-method="delete"
                      className={classes.dropdownLink}
                    >
                      Sign out
                    </a>
                  ]}
                />
              </ListItem>
            </List>
          }
        />
      );
    } else {
      return (
        <Header
          brand="Пешеходка"
          color="dark"
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#/users/sign_in"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Sign in
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#/users/sign_up"
                  className={classes.registerNavLink}
                  onClick={e => e.preventDefault()}
                  color="primary"
                  round
                >
                  Sign up
                </Button>
              </ListItem>
            </List>
          }
        />
      );
    }
  }
}

Navigation.propTypes = {
  classes: PropTypes.object
};

export default withStyles(navbarsStyle)(Navigation);