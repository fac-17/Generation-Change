import React, { useEffect, useRef } from "react";
import L from "leaflet";

const LeafletMap = ({ searchLongLat, markersData }) => {
  // create map
  const mapRef = useRef(null);
  console.log(searchLongLat.latitude);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [51.509865, -0.118092],
      zoom: 9,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  useEffect(() => {
    searchLongLat
      ? mapRef.current.setView(
          [searchLongLat.latitude, searchLongLat.longitude],
          11
        )
      : console.log("searchLongLat not defined in Leaflet Map component");
  }, [searchLongLat]);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(() => {
    layerRef.current.clearLayers();
    markersData.pop();
    markersData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.title })
        .addTo(layerRef.current)
        .bindPopup(marker.title);
    });
  }, [markersData]);

  return <div id="map" />;
};

export default LeafletMap;
