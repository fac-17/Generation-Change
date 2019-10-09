import React from "react";
import ConvertPostcode from "../Utils/ConvertPostcode";
import { getData } from "../Utils/getData";

test("ConvertPostcode returns correct longitude and latitude ", () => {
  const expected = { longitude: -2.008298, latitude: 50.712412 };
  const initialPostcode = "BH15 4DH";
  return ConvertPostcode(initialPostcode).then(actual => {
    expect(actual).toEqual(expected);
    expect("BH15 4DH").toEqual(initialPostcode);
  });
});

// test("GetData takes callback and passes it airtable projects data", () => {
//   let data = "initial data";
//   console.log(data);
//   // const expected = { longitude: -2.008298, latitude: 50.712412 };

//   return getData().then(data => {
//     expect(Array.isArray(data)).toBeTruthy;
//     console.log(data);
//     console.log("data");
//   });
// });
