const { config } = require("dotenv");
config();
const Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_KEY
});

const base = Airtable.base(process.env.AIRTABLE_BASE);

exports.handler = (event, context, callback) => {
  const allRecords = [];
  base("Table 1")
    .select({
      view: "Grid view"
    })
    .eachPage(
      (page = (records, fetchNextPage) => {
        records.forEach(record => {
          allRecords.push(record);
        });
        fetchNextPage();
      })
    );
};
