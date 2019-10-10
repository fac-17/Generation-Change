import React from "react";
import Navbar from "../Universal/Navbar";
import ProjectCards from "./ProjectCards";

const ResultsPage = ({ geocode }) => {
  console.log({ geocode });

  return (
    <div>
      <Navbar />
      <h2>Results Page</h2>
      <ProjectCards />
    </div>
  );
};

export default ResultsPage;
