import React from "react"
import PropTypes from "prop-types"

class PlacesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: JSON.parse(this.props.data)
    }
  }

  render () {
    return(
      <div>
        <h2>Name: {this.state.place.name}</h2>
        <h5>Latitude: {this.state.place.latitude}</h5>
        <h5>Longitude: {this.state.place.longitude}</h5>
        <h5>Address: {this.state.place.address}</h5>
        <h4>Description: {this.state.place.description}</h4>
        <h4>Rules: {this.state.place.rules}</h4>
      </div>
    );
  }
}

export default PlacesShow;
