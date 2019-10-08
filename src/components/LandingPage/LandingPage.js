import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Stories from "./Stories";

const LandingPage = () => {
  return (
    <div className="dark-bg-gradient">
      <h2>Landing Page</h2>
      <Navbar />
      <Searchbar />
      <Stories />
    </div>
  );
};

export default LandingPage;
