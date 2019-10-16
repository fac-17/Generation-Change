const data = [
  {
    id: "recRYPGGGrffifVix",
    fields: {
      project_id: "020",
      title: "Evolve Gardening Project at George Green's School",
      tagline: "Environmental project, lots of ways to get involved",
      category: ["Fundraising"],
      project_duration_weeks: 1,
      session_duration_hours: 2,
      group_size: 0,
      session_frequency_per_week: 1,
      postcode: "E14 3DW",
      project_details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      organisation_details:
        "George Green's School is a coeducational secondary school and sixth form, located in Cubitt Town on the Isle of Dogs in the London Borough of Tower Hamlets",
      minimum_age: 18,
      maximum_age: 0,
      longitude: -0.00763,
      latitude: 51.48813
    },
    latitude: 51.48813,
    longitude: -0.00763,
    distance: 1
  },
  {
    id: "recQ1iFeTOJeXroKs",
    fields: {
      project_id: "022",
      title: "Honey Project with George Green's School",
      tagline: "Care about bees? Learn how to make honey and save the bees",
      category: ["Volunteering"],
      project_duration_weeks: 0,
      session_duration_hours: 4,
      group_size: 0,
      session_frequency_per_week: 1,
      postcode: "E14 3DW",
      project_details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      organisation_details:
        "George Green's School is a coeducational secondary school and sixth form, located in Cubitt Town on the Isle of Dogs in the London Borough of Tower Hamlets",
      minimum_age: 16,
      maximum_age: 0,
      longitude: -0.00763,
      latitude: 51.48813
    },
    latitude: 51.48813,
    longitude: -0.00763,
    distance: 1
  }
];

const expected = [
  { latLng: { lat: 51.5007, lng: -0.1246 }, title: "your location" }
];

const showResultsAsMarkers = data => {
  return data.reduce((acc, curr) => {
    console.log("this is acc", acc);
    if (
      curr.fields.latitude !== undefined ||
      curr.fields.longitude !== undefined
    ) {
      const latLngObject = {};
      latLngObject["title"] = curr.fields.title;
      latLngObject["latitude"] = curr.fields.latitude;
      latLngObject["longitude"] = curr.fields.longitude;
      return acc.concat(
        Object.fromEntries(new Map([["title", curr.fields.title]]))
      );
    } else {
      return acc;
    }
  }, []);
};

export default showResultsAsMarkers;
