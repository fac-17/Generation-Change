import React from "react";
import Searchbar from "../Universal/Searchbar";
import Navbar from "../Universal/Navbar";
import Title from "./Title";
import Stories from "./Stories";

const LandingPage = ({ setSearchLongLat, data }) => {
  return (
    <div className="dark-bg-gradient">
      <Navbar />
      <Title />
      <Searchbar setSearchLongLat={setSearchLongLat} />
      <Stories data={data}/>
    </div>
  );
};

export default LandingPage;
