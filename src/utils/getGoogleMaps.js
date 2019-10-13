const getGoogleMaps = () => {
  return fetch("./.netlify/functions/googleMaps/googleMaps")
    .then(response => response.json())
    .then(({ result: { latitude, longitude } }) => {
      return { longitude, latitude };
    })
    .catch(err => {
      return err;
    });
};

module.exports = getGoogleMaps;
