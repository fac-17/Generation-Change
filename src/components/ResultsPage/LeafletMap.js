import React, { useEffect } from "react";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

const LeafletMap = () => {
  const markerPosition = [51.5007, -0.1246];
  // create map
  const mapRef = React.useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
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

  // add marker
  const markerRef = React.useRef(null);
  useEffect(
    () => {
      if (markerRef.current) {
        markerRef.current.setLatLng(markerPosition);
      } else {
        markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
      }
    },
    [markerPosition]
  );

  return <div id="map" />;
};

export default LeafletMap;
