import { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "50vw",
      height: "50vh",
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13
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
