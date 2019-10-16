import React, { useEffect, useRef } from "react";
import L from "leaflet";

const LeafletMap = markersData => {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [51.5007, -0.1246],
      zoom: 10,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(
    () => {
      layerRef.current.clearLayers();
      console.log("markersData", markersData.markersData);
      markersData.markersData.forEach(marker => {
        L.marker(marker.latLng, { title: marker.title }).addTo(
          layerRef.current
        );
      });
    },
    [markersData]
  );

  return <div id="map" />;
};

export default LeafletMap;
