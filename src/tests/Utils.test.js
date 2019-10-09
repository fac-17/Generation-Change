import React from "react";
import ConvertPostcode from "../Utils/ConvertPostcode";

test("ConvertPostcode returns correct longitude and latitude ", () => {
  const expected = { longitude: -2.008298, latitude: 50.712412 };
  return ConvertPostcode("BH15 4DH").then(actual => {
    expect(actual).toEqual(expected);
  });
});
