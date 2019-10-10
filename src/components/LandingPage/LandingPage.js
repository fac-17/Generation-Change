import React from "react";
import Searchbar from "../Universal/Searchbar";
import Navbar from "../Universal/Navbar";
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
