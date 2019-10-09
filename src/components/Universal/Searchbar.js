import React from "react";
import convertPostcode from "./../../utils/convertPostcode";
import { useHistory } from "react-router-dom";

const Searchbar = ({ setGeocode }) => {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    const searchPostcode = event.target.elements.postcode.value;
    if (searchPostcode.length < 5) return;
    convertPostcode(searchPostcode).then(coordinates => {
      // console.log(coordinates);

      console.log(
        "searchbar - handle submit - set geocode function = ",
        setGeocode
      );

      setGeocode(coordinates);
      console.log("line 24 cords = ", coordinates);
      history.push("/results");
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
      <button type="submit" className="button button--search">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default Searchbar;
