import React from "react";

const Searchbar = () => {
  const [postcode, setPostcode] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const searchPostcode = event.target.elements.postcode.value;
    console.log({ searchPostcode });
    setPostcode(searchPostcode);

    // setProfiles("loading");
    // requestMembers(org, team).then(profiles => {
    //   setProfiles(profiles);
    // });
  }

  console.log({ postcode });

  return (
    <form id="searchbar" onSubmit={handleSubmit}>
      <label>
        Postcode Search
        <input
          name="postcode"
          type="text"
          placeholder="Enter a postcode"
        ></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
