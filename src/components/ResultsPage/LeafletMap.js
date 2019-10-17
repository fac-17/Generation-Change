import React, { useEffect, useRef } from "react";
import L from "leaflet";

const LeafletMap = ({ markersData }) => {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [53.41058, -2.97794],
      zoom: 6,
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
  useEffect(() => {
    layerRef.current.clearLayers();
    markersData.forEach(marker => {
      console.log("markeer", marker);
      L.marker(marker.latLng, { title: marker.title })
        .addTo(layerRef.current)
        .bindPopup(marker.title)
        .openPopup();
    });
  }, [markersData]);

  return <div id="map" />;
};

export default LeafletMap;
