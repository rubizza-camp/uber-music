import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  purpleColor: {
    backgroundColor: '#9c27b0',
    '&:hover': {
      backgroundColor:'#c023db',
    },
  }
}));

export default function EventButton(props) {
  const classes = useStyles();
  return (
    <Button data-turbolinks="false" variant="contained" size={props.size} color='primary' className={classes.purpleColor}>
      {props.content}
    </Button>
  );
}
