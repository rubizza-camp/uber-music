import React from "react";
import Grid from '@material-ui/core/Grid';
import EventButton from '../shared/button_event'

class UpdateButtons extends React.Component {

  render() {
    const {user_ids, current_user, event_id} = this.props
    if (current_user && user_ids.includes(current_user.id)) {
      return (
        <Grid container direction="row" spacing="2">
          <Grid item>
            <a href={`/events/${event_id}/edit`} data-method="get">
              <EventButton content="Изменить" size="small"/>
            </a>
          </Grid>
        </Grid>
      );
    }
    else {
      return (
        <Grid container>
        </Grid>
      );
    }
  }
}

export default UpdateButtons;
