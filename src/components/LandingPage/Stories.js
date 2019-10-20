import React from "react";
import { Link } from "react-router-dom";

const Stories = ({ data }) => {
  return (
    <>
      <p className="featured-stories">Featured stories</p>
      <hr className="line" />
      <div className="container">
        <Link to={{ pathname: "/stories" }} className="container__story--0">
          <article>
            <img
              src={data[85].fields.story_photo_1}
              alt="story"
              className="story__img"
            />
            <h1 className="story__title--landing">
              {data[85].fields.story_title}
            </h1>
            <p className="category--landing">{data[85].fields.category}</p>
          </article>
        </Link>

        <article className="container__story--1">
          <img src="statics/story2.jpg" alt="story" className="story__img" />
          <h1>Princes Trust bring hospital garden back to life</h1>
          <p className="category--landing">Volunteering</p>
        </article>
        <article className="container__story--2">
          <img src="statics/story3.jpg" alt="story" className="story__img" />
          <h1>Change society and the environment</h1>
          <p className="category--landing">Fundraising</p>
        </article>
      </div>
    </>
  );
};

export default Stories;
