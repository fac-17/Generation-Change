const showResultsAsMarkers = data => {
  return data.reduce((acc, curr) => {
    if (
      curr.fields.latitude !== undefined ||
      curr.fields.longitude !== undefined
    ) {
      return acc.concat(
        Object.fromEntries(
          new Map([
            [
              "latLng",
              Object.fromEntries(
                new Map([
                  ["lat", curr.fields.latitude],
                  ["lng", curr.fields.longitude]
                ])
              )
            ],
            ["title", curr.fields.title]
          ])
        )
      );
    } else {
      return acc;
    }
  }, []);
};

export default showResultsAsMarkers;
