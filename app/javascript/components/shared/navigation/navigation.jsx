import React from 'react';
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "./dropdown";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "./navigation_button";
import Header from "./header";

import navbarsStyle from "../../../../assets/javascripts/components/shared/navbarsStyle";

class Navigation extends React.Component {
    render() {
        const {classes} = this.props;
        if (this.props.login === true) {
            return (
                <Header
                    brand="Пешеходка"
                    color="transparent"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
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
                                            src={this.props.image}
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
                                        "Me",
                                        "Sign out"
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
                    fixed
                    brand="Пешеходка"
                    color="transparent"
                    changeColorOnScroll={{
                        height: 400,
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
                                    Sign in
                                </Button>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Button
                                    href="#pablo"
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

export default withStyles(navbarsStyle)(
    Navigation
);