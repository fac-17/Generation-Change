import React from "react";
import Navbar from "./Navbar";
import Searchbar from "../Universal/Searchbar";
import Stories from "./Stories";

const LandingPage = () => {
  return (
    <div className="dark-bg-gradient">
      <Navbar />
      <h2>Landing Page</h2>
      <Searchbar />
      <Stories />
    </div>
  );
};

export default LandingPage;
