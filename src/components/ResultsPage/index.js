import React from "react";
import Navbar from "../Universal/Navbar";
import LeafletMap from "./LeafletMap";
import ProjectCards from "./ProjectCards";
import Searchbar from "../Universal/Searchbar";
import {
  dataWithDistances
} from "../../utils/dataManipulation";

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

  const listingsWithinXDistance = calcDistance
    .filter(
      e => e.distance <= 16093
      //metres which equals 10miles
    )
    .sort((a, b) => a.distance - b.distance);
  console.log("sorted data", listingsWithinXDistance);

  // console.log("listingsWithinXDistance", listingsWithinXDistance);

  // this is adding a layer and markers to our map
  const addMarker = () => {
    const lastMarker = markersData[markersData.length - 1];

    return setMarkersData([
      ...markersData,
      {
        title: +lastMarker.title + 1,
        latLng: {
          lat: lastMarker.latLng.lat + 0.0001,
          lng: lastMarker.latLng.lng + 0.0001
        }
      }
    ]);
  };

  // passing listingsWithinXDistance into the ProjectCards component to then render listings
  return (
    <div>
      <Navbar />
      <Searchbar setSearchLongLat={setSearchLongLat} />
      <div id="container">
        <LeafletMap
          className="container__map"
          markersData={markersData}
          setMarkersData={setMarkersData}
        />
        <button onClick={addMarker}>Add marker</button>
      </div>
      <h2>Results Page</h2>
      <ProjectCards
        detailsData={detailsData}
        setDetailsData={setDetailsData}
        listingsWithinXDistance={listingsWithinXDistance}
        data={data}
      />
    </div>
  );
};

export default ResultsPage;
