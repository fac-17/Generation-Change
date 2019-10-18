import React, { useEffect } from "react";
import Navbar from "../Universal/Navbar";
import ImageContainer from "./ImageContainer";
import ProjectDetails from "./ProjectDetails";
import ProjectSummary from "./ProjectSummary";
import Searchbar from "../Universal/Searchbar";

const DetailsPage = ({ detailsData, setSearchLongLat }) => {
  console.log("details data", detailsData);

  useEffect(() => {
    if (detailsData !== {}) {
      console.log(detailsData);
      window.sessionStorage.setItem("storeObj", JSON.stringify(detailsData));
    }
  }, [detailsData]);

  return (
    <div>
      <div className="container__banner">
        <div className="navbar-flexbox">
          <Navbar />
          <div className="searchbar-container__results-and-details">
            <Searchbar setSearchLongLat={setSearchLongLat} />
          </div>
        </div>
        <ImageContainer detailsData={detailsData} />
        <ProjectDetails detailsData={detailsData} />
      </div>
      <ProjectSummary detailsData={detailsData} />
    </div>
  );
};

export default DetailsPage;
