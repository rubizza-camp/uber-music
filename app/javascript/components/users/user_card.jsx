import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
    width: 250,
    margin: '10px',
  },
  media: {
    height: 140,
  },
});

export default function UserCard(props) {
  const classes = useStyles();
  const {user, link} = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={user.image ? user.image_url : "/assets/default_avatar.jpg"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.nickname === "" &&
            "No nickname"
            }
            {user.nickname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {(user.first_name + ' ' + user.second_name) === " " &&
            "No name"
            }
            {(user.first_name + ' ' + user.second_name)}
            <br/>
            {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={link} data-method="get">
          <Button data-turbolinks="false" size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
