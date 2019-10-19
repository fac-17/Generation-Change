import React from "react";
import Searchbar from "../Universal/Searchbar";
import Navbar from "../Universal/Navbar";
import Title from "./Title";
import Stories from "./Stories";

const LandingPage = ({ searchLongLat, setSearchLongLat, data }) => {
  return (
    <div className="dark-bg-gradient">
      <Navbar />
      <Title />
      <Searchbar setSearchLongLat={setSearchLongLat} />
      <Stories
        searchLongLat={searchLongLat}
        setSearchLongLat={setSearchLongLat}
        data={data}
      />
    </div>
  );
};

export default LandingPage;
