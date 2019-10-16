import React, { useEffect } from "react";
import Navbar from "../Universal/Navbar";
import LeafletMap from "./LeafletMap";
import ProjectCards from "./ProjectCards";
import Searchbar from "../Universal/Searchbar";
import { dataWithDistances, listingsWithinXDistance } from "../../utils/dataManipulation";
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
  // Create an array of objects out of the incoming data from airtable.
  // This "change of format" for the data is necessary for the geolib function (next function) to work
  // When there is an empty row in airtable this would break the below function by throwing "undefined" values hence the ternary operator
  const calcDistance = dataWithDistances(data, searchLongLat);
  console.log("dataWithDistances", calcDistance);

  // filter through the reformated data array and call the geolib library getDistance function which returns the distance between two {longitude: x, latutude: y } objects that it is given.
  // we pass each object wihtin the reformated Data array into the geolib getDistance function as coordinate 1 and the coordinate of the postcode that has been input in the search field as coordinate 2.
  // this calculates the result listings distance from the searched postcode. We then only return an array with distances smaller or 5500000

  const sortedListings = listingsWithinXDistance(calcDistance);
    
  console.log("sorted data", sortedListings);

  const projectMarkers = showResultsAsMarkers(sortedListings);
  // console.log("listingsWithinXDistance", listingsWithinXDistance);

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
  }, []);

  // passing listingsWithinXDistance into the ProjectCards component to then render listings
  return (
    <div>
      <Navbar />
      <Searchbar setSearchLongLat={setSearchLongLat} />
      <div id="container" className="container__projects">
        <LeafletMap
          className="container__map"
          markersData={markersData}
          setMarkersData={setMarkersData}
        />
        <h2>Results: {listingsWithinXDistance.length}</h2>
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
