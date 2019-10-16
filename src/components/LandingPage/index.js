import React from "react";
import Searchbar from "../Universal/Searchbar";
import Navbar from "../Universal/Navbar";
import Title from "./Title";
import Stories from "./Stories";

const LandingPage = ({ setSearchLongLat }) => {
  return (
    <div className="dark-bg-gradient">
      <Navbar />
      <Title />
      <Searchbar setSearchLongLat={setSearchLongLat} />
      <Stories />
    </div>
  );
};

export default LandingPage;
