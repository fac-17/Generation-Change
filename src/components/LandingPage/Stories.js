import React from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  return (
    <>
      <p className="word">Featured stories</p>
      <hr className="line" />
      <hr className="line line--dark" />
      <div className="container">
        <article className="container__story--0">
          <img src="./logo.png" alt="story"></img>
          <h1>Project title</h1>
          <p>category</p>
        </article>
        <article className="container__story--1">
          <img src="./logo.png" alt="story"></img>
          <h1>Project title</h1>
          <p>category</p>
        </article>
        <article className="container__story--2">
          <img src="./logo.png" alt="story"></img>
          <h1>Project title</h1>
          <p>category</p>
        </article>
      </div>
    </>
  );
};

export default Stories;
