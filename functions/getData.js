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
      }),
      (done = err => {
        if (err) {
          callback(err);
        } else {
          const body = JSON.stringify({ records: allRecords });
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              "content-type": "application/json",
              "cache-control": "Cache-Control: max-age=300, public"
            }
          };
          callback(null, response);
        }
      })
    );
};
