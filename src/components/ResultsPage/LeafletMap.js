import React, { useEffect, useRef } from "react";
import L from "leaflet";

const LeafletMap = ({ searchLongLat, markersData }) => {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [51.509865, -0.118092],
      zoom: 9,
      layers: [
        L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // retrieve data from localstorage
  const storageLongLat = Object.fromEntries(
    new Map([
      ["latitude", Number(window.sessionStorage.getItem("searchLat"))],
      ["longitude", Number(window.sessionStorage.getItem("searchLong"))]
    ])
  );

  useEffect(() => {
    searchLongLat
      ? mapRef.current.setView(
          [searchLongLat.latitude, searchLongLat.longitude],
          11
        )
      : mapRef.current.setView(
          [storageLongLat.latitude, storageLongLat.longitude],
          11
        );
  }, [searchLongLat, storageLongLat.latitude, storageLongLat.longitude]);

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
