import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function make_url(id){
  return 'organizations/' + id
}

export default function OrganizationCard(props) {
  const useStyles = makeStyles({
    card: {
      width: props.width,
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();
  const {organization} = props
  return (
    <a href={make_url(organization.id)} data-method="get">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={organization.images[0].url.url}
            title={organization.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {organization.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </a>
  );
}
