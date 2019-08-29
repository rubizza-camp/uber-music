import React from 'react';
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "./dropdown";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "./navigation_button";
import Header from "./header";
import DialogWindow from "./dialog_window";

import navbarsStyle from "../style/navbarsStyle";

function LoginButtons({classes}){
  return (
    <ListItem className={classes.listItem}>
      <Button
        href="/users/sign_in"
        className={classes.navLink}
        color="transparent"
      >
        Вход
      </Button>
      <Button
        href="/users/sign_up"
        className={classes.registerNavLink}
        color="primary"
        round
      >
        Регистрация
      </Button>
    </ListItem>
  );
}

function DropdownBar({image, classes, id}){
  return (
    <CustomDropdown
      center
      caret={false}
      hoverColor="black"
      buttonText={
        <img
          src={image ? image.url.url : "/assets/default_avatar.jpg"}
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
          href={"/users/" + id}
          data-method="get"
          className={classes.dropdownLink}
          data-turbolinks={"false"}
        >
          Профиль
        </a>,
        <a
          href={"/users/" + id + "/edit"}
          data-method="get"
          className={classes.dropdownLink}
          data-turbolinks={"false"}
        >
          Редактировать Профиль
        </a>,
        <a
          href="/users/sign_out"
          data-method="delete"
          className={classes.dropdownLink}
          data-turbolinks={"false"}
        >
          Выйти
        </a>
      ]}
    />
  );
}

function UserHasOrganizationsButton({classes}){
  return (
    <Button
      href="/events/new"
      className={classes.registerNavLink}
      color="primary"
      round
    >
      Создать Событие
    </Button>
  );
}

function UserHasNotOrganizationsButton({classes}){
  return (
    <DialogWindow/>
  );
}

function Navigation({classes, image, id, current_user, organizations}) {
    return (
      <Header
        brand="Пешеходка.бел"
        color="dark"
        fixed
        rightLinks={
          <List className={classes.list}>
            {current_user && <ListItem className={classes.listItem}>
              {organizations.length
                ? <UserHasOrganizationsButton classes={classes}/>
                : <UserHasNotOrganizationsButton classes={classes}/>}
            </ListItem>}
            <ListItem className={classes.listItem}>
              <Button
                href="/organizations"
                className={classes.navLink}
                color="transparent"
                >
                Организации
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/places"
                className={classes.navLink}
                color="transparent"
              >
                Места
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                data-turbolinks="false"
                href="/events"
                className={classes.navLink}
                color="transparent"
              >
                Мероприятия
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              {id ?
              <DropdownBar classes={classes} image={image} id={id}/> :

              <LoginButtons classes={classes} image={image} id={id}/>
              }
            </ListItem>
          </List>
        }
      />
    );
}

Navigation.propTypes = {
  classes: PropTypes.object
};

export default withStyles(navbarsStyle)(Navigation);
