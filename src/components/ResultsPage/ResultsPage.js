import React from "react";
import Navbar from "../Universal/Navbar";
import { Link } from "react-router-dom";
import { getDistance } from "geolib";

const ResultsPage = ({ geocode, data }) => {
  console.log({ geocode });
  console.log("data results", data);

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
