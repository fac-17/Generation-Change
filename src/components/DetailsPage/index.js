import React from "react";
import Navbar from "../Universal/Navbar";
import ImageContainer from "./ImageContainer";
import ProjectDetails from "./ProjectDetails";
import ProjectSummary from "./ProjectSummary";
import Searchbar from "../Universal/Searchbar";

const DetailsPage = ({detailsData}) => {
  console.log("details data",detailsData)
  return (
    <div>
      <div className="container__banner">
        <Navbar>
          <Searchbar />
        </Navbar>
        <ImageContainer detailsData={detailsData} />
        <ProjectDetails detailsData={detailsData}/>
      </div>
      <ProjectSummary detailsData={detailsData}/>
    </div>
  );
};

export default DetailsPage;
