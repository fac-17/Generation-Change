import React from "react";
import Navbar from "../Universal/Navbar";
// import { Link } from "react-router-dom";
import { getDistance } from "geolib";
import ProjectCards from "./ProjectCards";

const ResultsPage = ({ geocode, data }) => {
  // const longs = data.reduce((acc, curr) => {
  //   return curr.fields.longitude != null
  //     ? acc.concat(curr.fields.longitude)
  //     : acc;
  // }, []);
  // console.log("sortelistingslongs", longs);
  //
  const coords = data.reduce((acc, curr) => {
    return curr.fields.latitude !== undefined ||
      curr.fields.longitude !== undefined
      ? acc.concat(
          Object.fromEntries(
            new Map([
              ["latitude", curr.fields.latitude],
              ["longitude", curr.fields.longitude]
            ])
          )
        )
      : acc;
  }, []);
  console.log("coords", coords[0].latitude);

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

  coords.map(coord => {
    const distance = getDistance(
      {
        latitude: 51.5103,
        longitude: 7.49347
      },
      coord
    );
    console.log(distance);
  });

  return (
    <div>
      <Navbar />
      <h2>Results Page</h2>
      <ProjectCards data={data} />
    </div>
  );
};

export default ResultsPage;
