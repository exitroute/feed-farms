import { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "250px",
      height: "250px",
      latitude: 52.2381,
      longitude: 12.971,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZXhpdHJvdXRlIiwiYSI6ImNrOWdya3p5aTAxZ2ozZnFmeWl4OWU0azEifQ.G0qOk0qaSyulqZGBQAoqow"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;
