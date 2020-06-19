const express = require('express');
const router = express.Router();
const { BigQuery } = require("@google-cloud/bigquery");

const options = {
  keyFilename: "<PATH>",
  projectId: "<Projectname>",
};

const bigquery = new BigQuery(options);

const query = `SELECT name
        FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
        WHERE state = 'TX'
        LIMIT 100`;

const config = {
    query: query,
    location: "US",
};

router.get('/', (req, res) => {
    bigquery.createQueryJob(config)
    .then(job => {
        job[0].getQueryResults()
        .then(rows => {
            res.status(200).json(rows[0]);
        });
    });

})

module.exports = router;