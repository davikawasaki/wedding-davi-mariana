import React from 'react';
import MapGL, { Marker } from "react-map-gl";
import './index.css';

import mapboxgl from 'mapbox-gl';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

class Map extends React.Component {  
    state = {
      viewport: {
        width: '100%',
        height: '100%',
        latitude: -23.3050328,
        longitude: -51.1656567,
        zoom: 12.8,
        bearing: 0,
        pitch: 0
      }
    };
    render() {
      // const { containerWidth: width = '100%', containerHeight: height = 400 }: any = this.props;
      const token = "pk.eyJ1IjoiZGF2aWthd2FzYWtpIiwiYSI6ImNrN2RjODRlMjFvYmQzZW51NnU5dW92dGgifQ.Y2iu1kJZKeCrRfO2Ir61Ow"
      return (
        <MapGL
          className="relative"
          // width={width}
          // height={height}
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={token}
          onViewportChange={(viewport: any) => { this.setState({ viewport }) }}
        >
            <Marker latitude={-23.3050328} longitude={-51.1656567} offsetLeft={-20} offsetTop={-10}>
                <img src="marker.png" alt="Wedding marker" />
            </Marker>
        </MapGL>
      );
    }
}

export default Map;
