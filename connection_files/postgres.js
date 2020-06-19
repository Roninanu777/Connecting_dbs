const express = require('express');
const router = express.Router();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '@AnghaNanu777',
    port: 5432,
})

router.get('/', (req, res) => {
    pool.query('SELECT * FROM mock_data', (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
})

module.exports = router;