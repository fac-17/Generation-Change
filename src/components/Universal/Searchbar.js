import React from "react";
import { convertPostcode } from "./../../utils/convertPostcode";
import { useHistory } from "react-router-dom";

const Searchbar = ({ setSearchLongLat }) => {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const searchPostcode = event.target.elements.postcode.value;
    const trimmedPostcode = searchPostcode.replace(/\s+/g, "");
    if (searchPostcode.length < 5) return;
    convertPostcode(searchPostcode).then(coordinates => {
      setSearchLongLat(coordinates);
      history.push(`/results?postcode=${trimmedPostcode}`);
    });
  }

  return (
    <div className="searchbar">
      <form id="searchbar" onSubmit={handleSubmit}>
        <input
          aria-label="input-postcode"
          data-testid="searchbar__input"
          name="postcode"
          type="text"
          className="searchbar__input"
          placeholder="Enter postcode"
          aria-label="enter postcode"
        />

        <button
          type="submit"
          className="button button--search"
          data-testid="searchbar--search-button"
        >
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
