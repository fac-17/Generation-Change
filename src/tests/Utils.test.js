import { convertPostcode } from "../utils/convertPostcode";
import { getData } from "../utils/getData";

describe.only("Convert postcode to lon and lat", () => {
  test("ConvertPostcode returns correct longitude and latitude ", () => {
    const expected = {
      longitude: -2.008298,
      latitude: 50.712412
    };
    const initialPostcode = "BH15 4DH";
    return convertPostcode(initialPostcode).then(actual => {
      expect(actual).toEqual(expected);
    });
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
