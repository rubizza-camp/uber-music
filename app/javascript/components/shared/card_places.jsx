import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 250,
  },
  media: {
    height: 140,
  },
});

export default function PlacesCard(props) {
  const classes = useStyles();

  return (
    <a href={props.link} data-method="get">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.address}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={props.link} data-method="get">
            <Button data-turbolinks="false" size="small" color="primary">
              Learn More
            </Button>
          </a>
        </CardActions>
      </Card>
    </a>
  );
}
