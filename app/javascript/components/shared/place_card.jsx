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

export default function PlaceCard(props) {
  const classes = useStyles();
  const {place, link} = props;

  return (
    <a href={link} data-method="get">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={place.images.length ? place.first_image_url : "/assets/default_place.png"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {place.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {place.address}
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
