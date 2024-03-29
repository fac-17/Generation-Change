import React from "react";
import Navbar from "../Universal/Navbar";
import Searchbar from "../Universal/Searchbar";

const StoriesPage = ({ data, setSearchLongLat }) => {
  return (
    <>
      <div className="navbar-flexbox">
        <Navbar />
        <div className="searchbar-container__results-and-details">
          <Searchbar setSearchLongLat={setSearchLongLat} />
        </div>
      </div>
      <div className="wrapper__story">
        <img
          src={data[85].fields.story_photo_1}
          alt="story"
          className="story__img--page"
        />
        <p className="category--story">{data[85].fields.category}</p>
        <h1 className="title1">{data[85].fields.story_title}</h1>
        <div className="wrapper">
          <h2>What happened: </h2>
          <p>{data[85].fields.story_what}</p>
          <h2>The Impact: </h2>
          <div className="story-impact">
            <p className="story-impact-txt">
              <b className="story-impact-num">80</b>
              <p>hours contributed</p>
            </p>
            <p className="story-impact-txt">
              <b className="story-impact-num">40</b>
              <p>nights away</p>
            </p>
            <p className="story-impact-txt">
              <b className="story-impact-num">£2,000</b>
              <p>saved</p>
            </p>
          </div>
          <h2>The Charity: </h2>
          <p>{data[85].fields.charity_about}</p>
        </div>
      </div>
    </>
  );
};

export default StoriesPage;
