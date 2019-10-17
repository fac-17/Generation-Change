import React from "react";
import { Link } from "react-router-dom";

const Stories = ({ data }) => {
  console.log(data[85].fields.story_photo_1);
  return (
    <>
      <p className="word">Featured stories</p>
      <hr className="line" />
      <div className="container">
        <Link to={{ pathname: "/stories" }} className="container__story--0">
          <article>
            <img
              src={data[85].fields.story_photo_1}
              alt="story"
              className="story__img"
            />
            <h1>{data[85].fields.title}</h1>
            <p>{data[85].fields.category}</p>
          </article>
        </Link>

        <Link to={{ pathname: "/stories" }} className="container__story--1">
          <article className="container__story--1">
            <img
              src={data[85].fields.story_photo_1}
              alt="story"
              className="story__img"
            />
            <h1>{data[85].fields.title}</h1>
            <p>{data[85].fields.category}</p>
          </article>
        </Link>

        <Link to={{ pathname: "/stories" }} className="container__story--2">
          <article className="container__story--2">
            <img
              src={data[85].fields.story_photo_1}
              alt="story"
              className="story__img"
            />
            <h1>{data[85].fields.title}</h1>
            <p>{data[85].fields.category}</p>
          </article>
        </Link>
      </div>
    </>
  );
};

export default Stories;
