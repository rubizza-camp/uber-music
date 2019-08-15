import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function SmallText(props) {
  return (
    <Typography variant="body1">
      {props.content}
    </Typography>
  );
}
