import React from "react";
import Navbar from "../Universal/Navbar";
import ProjectCards from "./ProjectCards";
import Map from "./Map";
import Searchbar from "../Universal/Searchbar";

const ResultsPage = ({ geocode }) => {
  console.log({ geocode });

  return (
    <div>
      <Navbar>
        <Searchbar />
      </Navbar>
      <h2>Results Page</h2>
      <ProjectCards />
      <Map />
    </div>
  );
};

export default ResultsPage;
