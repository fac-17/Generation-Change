import React from "react";
import Navbar from "../Universal/Navbar";
import { Link } from "react-router-dom";

const StoriesPage = () => {
  return (
    <>
      <Navbar />
      <h2>Stories Page</h2>
      <Link to={{ pathname: "/details" }}>
        <h3>button which links to details page</h3>
      </Link>
    </>
  );
};

export default StoriesPage;
