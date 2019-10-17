import React from "react";
import Navbar from "../Universal/Navbar";
import { Link } from "react-router-dom";

const StoriesPage = ({ data }) => {
  console.log(data[85].fields);
  return (
    <>
      <Navbar />
      <div className="wrapper__story">
        <Link to={{ pathname: "/details" }}>
          <h1>{data[85].fields.story_title}</h1>
        </Link>
        <img
          src={data[85].fields.story_photo_1}
          alt="story"
          className="story__img--page"
        />
        <p className="category--story">{data[85].fields.category}</p>
        <div className="wrapper">
          <h2>What happened: </h2>
          <p>{data[85].fields.story_what}</p>
          <h2>The Impact: </h2>
          <p>{data[85].fields.story_results}</p>
        </div>
      </div>
    </>
  );
};

export default StoriesPage;
