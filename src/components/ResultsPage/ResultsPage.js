import React from "react";
import Navbar from "../Universal/Navbar";
import ProjectCards from "./ProjectCards";
import Map from "./Map";

const ResultsPage = ({ geocode }) => {
  console.log({ geocode });

  return (
    <div>
      <Navbar />
      <h2>Results Page</h2>
      <ProjectCards />
      <Map />
    </div>
  );
};

export default ResultsPage;
