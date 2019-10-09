/* eslint-disable */
const fetch = require("node-fetch");
const { config } = require("dotenv");
config();
const googleMapsAPIKey = process.env.GOOGLE_MAPS_API_KEY;

exports.handler = async function(event, context) {
  try {
    const { latitude, longitude } = event.queryStringParameters || {};
    if (!latitude || !longitude) {
      return { statusCode: 400, body: "Missing query parameters" };
    }
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}`;

    const response = await fetch(`${url}&key=${googleMapsAPIKey}`, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
