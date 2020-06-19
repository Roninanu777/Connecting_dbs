const express = require('express');
const router = express.Router();
const mssql = require('mssql');

const config = {
    user: '<user>',
    password: '<password>',
    server: '<servername>',
    database: '<dbname>'
}

router.get('/', (req, res) => {
    mssql.connect(config, err => {
        if(err) console.log(err);

        let request = new mssql.Request();
        request.query('select * from myTable', (err, results) => {
            if(err) console.log(err);
            res.send(results);
        })
    })
})

module.exports = router;