import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class PlacesIndex extends React.Component {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  constructor(props) {
    super(props);
    this.state = {
      places: JSON.parse(this.props.data)
    }
  }

  make_url(id){
    return 'places/' + id
  }

  render () {
    return(
      <Card className={classes.card}>
        { this.state.places.map((place) =>
          <CardContent>
            <Typography variant="h5" component="h2">
              {bull}
              {place.name}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {place.latitude}, {place.longitude}
            </Typography>
            <Typography variant="body2" component="p">
              Address: {place.address}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" to={this.make_url(place.id)}>Learn More</Button>
          </CardActions>
        )}
      </Card>
    );
  }
}

export default PlacesIndex;
