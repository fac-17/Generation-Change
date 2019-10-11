import React from "react";
import Navbar from "../Universal/Navbar";
import ImageContainer from "./ImageContainer";
import ProjectDetails from "./ProjectDetails";
import ProjectSummary from "./ProjectSummary";
import Searchbar from "../Universal/Searchbar";

const DetailsPage = () => {
  return (
    <div>
      <div className="container__banner">
        <Navbar>
          <Searchbar />
        </Navbar>
        <ImageContainer />
        <ProjectDetails />
      </div>
      <ProjectSummary />
    </div>
  );
};

export default DetailsPage;
