import React, { useEffect } from "react";
import Navbar from "../Universal/Navbar";
import ImageContainer from "./ImageContainer";
import ProjectDetails from "./ProjectDetails";
import ProjectSummary from "./ProjectSummary";
import Searchbar from "../Universal/Searchbar";

const DetailsPage = ({ detailsData, setSearchLongLat }) => {
  useEffect(() => {
    if (detailsData !== {}) {
      window.sessionStorage.setItem("detailsObj", JSON.stringify(detailsData));
    }
  }, [detailsData]);

  // console.log("localstoragekey", window.sessionStorage.getItem("detailsObj"));
  // const storageDetails = JSON.parse(
  //   window.sessionStorage.getItem("detailsObj")
  // );

  // console.log("storageDetails", storageDetails);

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
