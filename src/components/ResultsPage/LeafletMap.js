import React from "react";
import { Map, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

const position = [51.505, -0.09];
const LeafletMap = () => {
  return (
    <iframe  className="container__map" src="https://codepen.io/PaulLeCam/full/gzVmGw">
      <Map center={position} zoom={13}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </iframe>
  );
};

export default LeafletMap;
