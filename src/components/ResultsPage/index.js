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
      <div className="navbar-flexbox">
        <Navbar />
        <Searchbar setSearchLongLat={setSearchLongLat} />
      </div>
      <div id="container" className="container__projects">
        <LeafletMap
          className="container__map"
          markersData={markersData}
          setMarkersData={setMarkersData}
        />
        <h2>{sortedListings.length} results within 10 miles distance</h2>
        <ProjectCards
          className="project-card"
          detailsData={detailsData}
          setDetailsData={setDetailsData}
          sortedListings={sortedListings}
          data={data}
        />
      </div>
    </div>
  );
};

export default ResultsPage;
