import { convertPostcode } from "../utils/convertPostcode";
import {
  dataWithDistances,
  listingsWithinXDistance
} from "../utils/dataManipulation";

describe.only("ConvertPostcodeConvert postcode to lon and lat", () => {
  const expected = {
    longitude: -2.008298,
    latitude: 50.712412
  };
  const initialPostcode = "BH15 4DH";
  test("ConvertPostcode returns correct longitude and latitude ", () => {
    return convertPostcode(initialPostcode).then(actual => {
      expect(actual).toEqual(expected);
    });
  });

  test("Check dataWithDistances function works", () => {
    const searchLongLat = { latitude: 51.5103, longitude: 7.49347 };
    const dataBefore = [
      {
        id: "recP19Z2CCWFQNWKQ",
        fields: {
          longitude: -2.008298,
          latitude: 50.712412
        }
      },
      {
        id: "reck5HOHxGPBMkr8f",
        fields: {
          longitude: -2.008376,
          latitude: 50.718168
        }
      }
    ];

    const dataAfter = [
      {
        id: "recP19Z2CCWFQNWKQ",
        fields: {
          latitude: 50.712412,
          longitude: -2.008298
        },
        latitude: 50.712412,
        longitude: -2.008298,
        distance: 669480
      },
      {
        id: "reck5HOHxGPBMkr8f",
        fields: {
          latitude: 50.718168,
          longitude: -2.008376
        },
        latitude: 50.718168,
        longitude: -2.008376,
        distance: 669360
      }
    ];
    const actual = dataWithDistances(dataBefore, searchLongLat);
    const expected = dataAfter;
    return expect(actual).toMatchObject(expected);
  });

  test("listingsWithinXDistance sorts correctly ", () => {
    const data = [
      {
        id: "recP19Z2CCWFQNWKQ",
        fields: {
          latitude: 50.712412,
          longitude: -2.008298
        },
        latitude: 50.712412,
        longitude: -2.008298,
        distance: 200
      },
      {
        id: "reck5HOHxGPBMkr8f",
        fields: {
          latitude: 50.718168,
          longitude: -2.008376
        },
        latitude: 50.718168,
        longitude: -2.008376,
        distance: 100
      }
    ];
    const actual = listingsWithinXDistance(data);
    const expected = [
      {
        id: "reck5HOHxGPBMkr8f",
        fields: {
          latitude: 50.718168,
          longitude: -2.008376
        },
        latitude: 50.718168,
        longitude: -2.008376,
        distance: 100
      },
      {
        id: "recP19Z2CCWFQNWKQ",
        fields: {
          latitude: 50.712412,
          longitude: -2.008298
        },
        latitude: 50.712412,
        longitude: -2.008298,
        distance: 200
      }
    ];
    return expect(actual).toMatchObject(expected);
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
