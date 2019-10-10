import React from "react";
import Navbar from "../Universal/Navbar";
import ImageContainer from "./ImageContainer";
import ProjectDetails from "./ProjectDetails";
import ProjectSummary from "./ProjectSummary";

const DetailsPage = () => {
  return (
    <>
      <Navbar />
      <ImageContainer />
      <ProjectDetails />
      <ProjectSummary />
    </>
  );
};

export default DetailsPage;
