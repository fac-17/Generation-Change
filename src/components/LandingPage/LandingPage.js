import React from "react";
import Navbar from "./Navbar";
import Searchbar from "../Universal/Searchbar";
import Stories from "./Stories";

const LandingPage = ({ setGeocode }) => {
  // console.log("landing - set geocode function = ", setGeocode);

  return (
    <div className="dark-bg-gradient">
      <Navbar />
      <h2>Landing Page</h2>
      <Searchbar setGeocode={setGeocode} />
      <Stories />
    </div>
  );
};

export default LandingPage;
