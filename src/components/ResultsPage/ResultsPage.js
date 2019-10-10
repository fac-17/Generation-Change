import React from "react";
import Navbar from "../Universal/Navbar";
import { Link } from "react-router-dom";
import { getDistance } from "geolib";

const ResultsPage = ({ geocode, data }) => {
  const longs = data.reduce((acc, curr) => {
    return curr.fields.longitude != null
      ? acc.concat(curr.fields.longitude)
      : acc;
  }, []);
  // console.log("sortelistingslongs", longs);

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

  // console.log("fromentries", array);

  console.log(
    "distance",
    getDistance(
      { latitude: 51.5103, longitude: 7.49347 },
      { latitude: "51° 31' N", longitude: "7° 28' E" }
    )
  );

  return (
    <>
      <Navbar />
      <h2>Results Page</h2>
      <Link to={{ pathname: "/details" }}>
        <h3>card which links to details page</h3>
      </Link>
    </>
  );
};

export default ResultsPage;
