import React from "react";
import Navbar from "../Universal/Navbar";
// import { Link } from "react-router-dom";
import { getDistance } from "geolib";
import LeafletMap from "./LeafletMap";
import ProjectCards from "./ProjectCards";

const ResultsPage = ({ searchLongLat, data }) => {
  // Create an array of objects out of the incoming data from airtable.
  // This "change of format" for the data is necessary for the geolib function (next function) to work
  // When there is an empty row in airtable this would break the below function by throwing "undefined" values hence the ternary operator

  const reformatedData = data.reduce((acc, curr) => {
    return curr.fields.latitude !== undefined ||
      curr.fields.longitude !== undefined
      ? acc.concat(
          Object.fromEntries(
            new Map([
              ["id", curr.id],
              ["fields", curr.fields],
              ["latitude", curr.fields.latitude],
              ["longitude", curr.fields.longitude]
            ])
          )
        )
      : acc;
  }, []);
  console.log("reformatedData", reformatedData);

  // filter through the reformated data array and call the geolib library getDistance function which returns the distance between two {longitude: x, latutude: y } objects that it is given.
  // we pass each object wihtin the reformated Data array into the geolib getDistance function as coordinate 1 and the coordinate of the postcode that has been input in the search field as coordinate 2.
  // this calculates the result listings distance from the searched postcode. We then only return an array with distances smaller or 5500000

  const listingsWithinXDistance = reformatedData.filter(
    singleListingReformatedData => {
      // console.log("singleListingReformatedData", singleListingReformatedData);
      const distance = getDistance(searchLongLat, singleListingReformatedData);
      console.log("distance", distance);
      return distance <= 5500000;
    }
  );

  // console.log("listingsWithinXDistance", listingsWithinXDistance);

  // passing listingsWithinXDistance into the ProjectCards component to then render listings
  return (
    <div>
      <Navbar />
      <div id="container">
        <LeafletMap className="container__map" />
      </div>
      <h2>Results Page</h2>
      <ProjectCards
        listingsWithinXDistance={listingsWithinXDistance}
        data={data}
      />
    </div>
  );
};

export default ResultsPage;
