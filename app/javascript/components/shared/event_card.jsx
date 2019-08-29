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
    maxWidth: 345,
    margin: '10px',
  },
  media: {
    height: 140,
  },
});

export default function EventCard(props) {
  const classes = useStyles();
  const {event, link} = props;

  return (
    <a href={link} data-method="get">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={event.images.length ? event.first_image_url : "/assets/default_event.jpeg"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {event.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {event.address}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Начало: {event.start_time}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Конец: {event.end_time}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button data-turbolinks="false" size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </a>
  );
}
