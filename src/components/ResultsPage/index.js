import React, { useEffect } from "react";
import Navbar from "../Universal/Navbar";
import LeafletMap from "./LeafletMap";
import ProjectCards from "./ProjectCards";
import Searchbar from "../Universal/Searchbar";
import {
  dataWithDistances,
  listingsWithinXDistance
} from "../../utils/dataManipulation";
import showResultsAsMarkers from "../../utils/showResultsAsMarkers";

const ResultsPage = ({
  detailsData,
  setDetailsData,
  searchLongLat,
  data,
  setSearchLongLat
}) => {
  useEffect(() => {
    if (searchLongLat !== "") {
      window.sessionStorage.setItem("searchLat", searchLongLat.latitude);
      window.sessionStorage.setItem("searchLong", searchLongLat.longitude);
    }
  }, [searchLongLat]);

  // consts for map & markers
  const storageLongLat = Object.fromEntries(
    new Map([
      ["latitude", Number(window.sessionStorage.getItem("searchLat"))],
      ["longitude", Number(window.sessionStorage.getItem("searchLong"))]
    ])
  );

  const calcDistance = dataWithDistances(data, searchLongLat || storageLongLat);
  const sortedListings = listingsWithinXDistance(calcDistance);
  const projectMarkers = showResultsAsMarkers(sortedListings);
  const markersData = projectMarkers.map(marker => {
    return {
      title: marker.title,
      latLng: {
        lat: marker.latLng.lat,
        lng: marker.latLng.lng
      }
    };
  });

  return (
    <div>
      <div className="fix-navbar">
        <div className="navbar-flexbox">
          <Navbar />
          <div className="searchbar-container__results-and-details">
            <Searchbar
              searchLongLat={searchLongLat}
              setSearchLongLat={setSearchLongLat}
            />
          </div>
        </div>
        <hr className="line--dark--nav" />
      </div>
      <div id="container" className="container__projects">
        <div className="container__projects__inner-wrap">
          <h2 className="number-of-results">
            {sortedListings.length} results within 10 miles distance
          </h2>
          <ProjectCards
            className="project-card"
            detailsData={detailsData}
            setDetailsData={setDetailsData}
            sortedListings={sortedListings}
            data={data}
          />
        </div>
        <div className="leaflet-map-container">
          <LeafletMap
            className="container__map"
            markersData={markersData}
            searchLongLat={searchLongLat}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
