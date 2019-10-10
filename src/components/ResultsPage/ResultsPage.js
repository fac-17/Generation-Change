import React from "react";
import Navbar from "../Universal/Navbar";
import { Link } from "react-router-dom";
import { getDistance } from "geolib";

const ResultsPage = ({ geocode, data }) => {
  console.log({ geocode });
  console.log("data results", data);
  const receivedData = data;
  console.log("receiveddata", receivedData);
  // const sortedListings = receivedData.map(listing => {
  //   console.log(listing.fields.latitude);
  // });

  console.log(
    "distance",
    getDistance(
      { latitude: 51.5103, longitude: 7.49347 },
      { latitude: "51° 31' N", longitude: "7° 28' E" }
    )
  );

  return (
    <>
      <Navbar />
      <h2>Results Page</h2>
      <Link to={{ pathname: "/details" }}>
        <h3>card which links to details page</h3>
      </Link>
    </>
  );
};

export default ResultsPage;
