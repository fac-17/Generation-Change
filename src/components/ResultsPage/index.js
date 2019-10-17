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
  setSearchLongLat,
  markersData,
  setMarkersData
}) => {
  const calcDistance = dataWithDistances(data, searchLongLat);

  const sortedListings = listingsWithinXDistance(calcDistance);

  const projectMarkers = showResultsAsMarkers(sortedListings);

  // this is adding a layer and markers to our map
  const addMarker = () => {
    const lastMarker = projectMarkers[projectMarkers.length - 1];

    return setMarkersData([
      ...projectMarkers,
      {
        title: +lastMarker.title + 1,
        latLng: {
          lat: lastMarker.latLng.lat,
          lng: lastMarker.latLng.lng
        }
      }
    ]);
  };

  useEffect(() => {
    projectMarkers.map(addMarker);
  }, [searchLongLat]);

  return (
    <div>
      <div className="fix-navbar">
        <div className="navbar-flexbox">
          <Navbar />
          <div className="searchbar-container__results-and-details">
            <Searchbar setSearchLongLat={setSearchLongLat} />
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
            setMarkersData={setMarkersData}
            searchLongLat={searchLongLat}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
