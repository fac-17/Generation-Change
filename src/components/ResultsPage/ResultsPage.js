import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const ResultsPage = ({ geocode }) => {
  console.log({ geocode });

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
