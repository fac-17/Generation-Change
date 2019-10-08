import React from "react";

const Searchbar = () => {
  const [postcode, setPostcode] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const searchPostcode = event.target.elements.postcode.value;
    if (searchPostcode.length < 5) return;
    // console.log({ searchPostcode });
    setPostcode(searchPostcode);
  }

  // console.log({ postcode });

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
