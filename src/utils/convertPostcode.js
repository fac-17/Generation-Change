const convertPostcode = postcode => {
  return fetch(`https://api.postcodes.io/postcodes/${postcode}`)
    .then(response => response.json())
    .then(({ result: { latitude, longitude } }) => {
      return { latitude, longitude };
    })
    .catch(err => {
      return err;
    });
};

module.exports = { convertPostcode };
