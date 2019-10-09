import React from "react";
import convertPostcode from "./../../utils/convertPostcode";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [geocode, setGeocode] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const searchPostcode = event.target.elements.postcode.value;
    if (searchPostcode.length < 5) return;
    convertPostcode(searchPostcode).then(coordinates => {
      setGeocode(coordinates);
    });
  }

  return (
    <form id="searchbar" onSubmit={handleSubmit}>
      <label>
        Postcode Search
        <input
          name="postcode"
          type="text"
          className="searchbar__input"
          placeholder="Enter your postcode..."
          aria-label="enter your postcode"
        ></input>
      </label>
      <Link to={{ pathname: "/results" }}>
        <button type="submit" className="button button--search">
          <i className="fa fa-search"></i>
        </button>
      </Link>
    </form>
  );
};

export default Searchbar;
