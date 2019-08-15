import React from "react"
import PropTypes from "prop-types"

class PlacesIndex extends React.Component {
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
      <div>
        { this.state.places.map((place) =>
          <div>
            <a href={this.make_url(place.id)}>Name: {place.name}</a>
            <h5>Latitude: {place.latitude}</h5>
            <h5>Longitude: {place.longitude}</h5>
            <h5>Address: {place.address}</h5>
            <h4>Description: {place.description}</h4>
            <h4>Rules: {place.rules}</h4>
            <h4>\\\\\\\\\\\\\\</h4>
          </div>
        )}
      </div>
    );
  }
}

export default PlacesIndex;
