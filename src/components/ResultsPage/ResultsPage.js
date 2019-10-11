import React from "react";
import Navbar from "../Universal/Navbar";
// import { Link } from "react-router-dom";
import { getDistance } from "geolib";
import ProjectCards from "./ProjectCards";

const ResultsPage = ({ geocode, data }) => {
  console.log("airtabledata", data);

  const coords = data.reduce((acc, curr) => {
    return curr.fields.latitude !== undefined ||
      curr.fields.longitude !== undefined
      ? acc.concat(
          Object.fromEntries(
            new Map([
              ["id", curr.id],
              ["latitude", curr.fields.latitude],
              ["longitude", curr.fields.longitude]
            ])
          )
        )
      : acc;
  }, []);
  console.log("coords", coords);

  // const array = [];
  // data.map((e, index) => {
  //   console.log(e.fields.latitude[index]);
  //   return e.fields.latitude[index] != null
  //     ? console.log("not in")
  //     : // e.fields.longitude[index] != null
  //       //   ? console.log(e, index)
  //       //   : console.log("not in")
  //       console.log("not in 2");

  //   // Object.fromEntries(
  //   //   new Map([e.fields.latitude[index]], [e.fields.longitude[index]])
  //   // );
  // });

  // console.log("geocode", geocode);

  const distanceIdArray = coords.map(coord => {
    console.log("coord", coord);
    const distance = getDistance(geocode, coord);
    const distIdObj = Object.fromEntries(
      new Map([["id", coord.id], ["distance", distance]])
    );
    return distIdObj;
  });

  console.log("distanceIdArray", distanceIdArray);

  return (
    <div>
      <Navbar />
      <h2>Results Page</h2>
      <ProjectCards data={data} />
    </div>
  );
};

export default ResultsPage;
