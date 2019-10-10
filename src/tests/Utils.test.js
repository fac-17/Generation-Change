import { convertPostcode } from "../utils/convertPostcode";
import { getData } from "../utils/getData";

describe.only("ConvertPostcodeConvert postcode to lon and lat", () => {
  const expected = {
    longitude: -2.008298,
    latitude: 50.712412
  };
  const initialPostcode = "BH15 4DH";
  test("ConvertPostcode returns correct longitude and latitude ", () => {
    return convertPostcode(initialPostcode).then(actual => {
      expect(actual).toEqual(expected);
      expect(initialPostcode).toEqual("BH15 4DH");
    });
  });
});

// airtable data retreival test -
// requires Netlify functions to work locally

// describe.only("getData retrieves project data from airtable", () => {
// test("GetData returns an array of data", () => {
//   let data = "initial data";
//   console.log(data);
//   // const expected = { longitude: -2.008298, latitude: 50.712412 };
//   return getData().then(data => {
//     expect(Array.isArray(data)).toBeTruthy;
//     console.log(data);
//     console.log("data");
//   });
// });
// });
