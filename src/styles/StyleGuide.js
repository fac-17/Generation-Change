import React from "react";
import "./Normalize.sass";
import "./App.sass";

const StyleGuide = () => {
  return (
    <div>
      <h1 className="title1">H1 heading Raleway</h1>
      <p className="title1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h2 className="title2">H2 heading Montserrat</h2>
      <p className="title2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h3 className="title3">H3 heading Lato</h3>
      <p className="title3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h4 className="title4">H4 heading Quicksand</h4>
      <p className="title4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="dark-bg-gradient--rectangle">
        dark-bg-gradient--rectangle
      </div>
      <button className="button button--search">Search</button>
      <button className="button button--accept">Accept</button>
      <div className="dark-bg-gradient">
        <img src="./favicon.ico" className="logo"></img>
        <h1 className="title1">Grid title</h1>
        <div className="searchbar">
          <input className="searchbar__input" placeholder="Enter your postcode..."/>
          <button className="button button--search">
          <i class="fa fa-search"></i></button>
        </div>
        <p className="word">Featured stories</p>
        <hr className="line" />
        <hr className="line line--dark" />
        <div className="container">
          <article className="container__story--0">
            <img src="./favicon.ico"></img>
            <h1>Project title</h1>
            <p>category</p>
          </article>
          <article className="container__story--1">
            <img src="./favicon.ico"></img>
            <h1>Project title</h1>
            <p>category</p>
          </article>
          <article className="container__story--2">
            <img src="./favicon.ico"></img>
            <h1>Project title</h1>
            <p>category</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
