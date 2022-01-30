import React from 'react';
import MapGL, { Marker } from "react-map-gl";
import './index.css';

class Map extends React.Component {  
    state = {
      viewport: {
        latitude: -23.3050328,
        longitude: -51.1656567,
        zoom: 12.8,
        bearing: 0,
        pitch: 0
      }
    };
    render() {
      const { containerWidth: width = 500, containerHeight: height = 400 }: any = this.props;
      const token = "pk.eyJ1IjoiZGF2aWthd2FzYWtpIiwiYSI6ImNrN2RjODRlMjFvYmQzZW51NnU5dW92dGgifQ.Y2iu1kJZKeCrRfO2Ir61Ow"
      return (
        <MapGL
          className="relative"
          width={width}
          height={height}
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={token}
          onViewportChange={(viewport: any) => this.setState({ viewport })}
        >
            <Marker latitude={-23.3050328} longitude={-51.1656567} offsetLeft={-20} offsetTop={-10}>
                <img src="marker.png" alt="Wedding marker" />
            </Marker>
        </MapGL>
      );
    }
}

export default Map;
