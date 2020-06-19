const express = require('express');
const router = express.Router();
const Redshift = require('node-redshift');

const client = {
    user: '<user>', // type = string
    database: '<dbname>', // type = string
    password: '<password>', // type = string
    port: <port>, // type = number
    host: '<host>' // type = string
}

router.get('/', (req, res) => {
    let redshiftClient = new Redshift(client);
    redshiftClient.query('<query string here>', {raw: true})
    .then( data => {
        res.status(200).json(data);    
    }, (err) => {throw err});
})

module.exports = router;