import React from "react";
import Searchbar from "../Universal/Searchbar";
import Navbar from "../Universal/Navbar";
import Stories from "./Stories";

const LandingPage = ({ setSearchLongLat }) => {
  // console.log("landing - set geocode function = ", setSearchLongLat);

  return (
    <div className="dark-bg-gradient">
      <Navbar />
      <h2>Landing Page</h2>
      <Searchbar setSearchLongLat={setSearchLongLat} />
      <Stories />
    </div>
  );
};

export default LandingPage;
