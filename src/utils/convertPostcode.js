const convertPostcode = postcode => {
  // console.log("searching");
  return fetch(`https://api.postcodes.io/postcodes/${postcode}`)
    .then(response => response.json())
    .then(({ result: { latitude, longitude } }) => {
      return { longitude, latitude };
    })
    .catch(err => {
      return err;
    });
};

module.exports = convertPostcode;
