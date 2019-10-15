import React, { useEffect } from "react";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

function LeafletMap() {
  useEffect(() => {
    // create map
    L.map("map", {
      center: [51.5007, -0.1246],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  return <div id="map" />;
}

export default LeafletMap;
