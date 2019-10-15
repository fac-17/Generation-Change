/**
 * FUNCTIONS WHICH DEAL WITH DATA STRUCTIRES
 */

import { getDistance } from "geolib";

const searchLongLat = { latitude: 51.5103, longitude: 7.49347 };
const dataWithDistances = data => {
  return data.reduce((acc, curr) => {
    if (
      curr.fields.latitude !== undefined ||
      curr.fields.longitude !== undefined
    ) {
      const projectLongLat = {};
      projectLongLat["longitude"] = curr.fields.longitude;
      projectLongLat["latitude"] = curr.fields.latitude;
      const distance = getDistance(searchLongLat, projectLongLat);
      return acc.concat(
        Object.fromEntries(
          new Map([
            ["id", curr.id],
            ["fields", curr.fields],
            ["latitude", curr.fields.latitude],
            ["longitude", curr.fields.longitude],
            ["distance", distance]
          ])
        )
      );
    } else {
      return acc;
    }
  }, []);
};

const listingsWithinXDistance = arr => {
  return arr;
};

export { dataWithDistances, listingsWithinXDistance };
