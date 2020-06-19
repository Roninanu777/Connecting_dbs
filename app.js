const express = require('express');
const app = express();
const postgreRouter = require('./connection_files/postgres');
const redshiftRouter = require('./connection_files/redshift');
const mssqlRouter = require('./connection_files/mssql');
const googleBigqueryRouter = require('./connection_files/google_cloud');

app.use(express.json());
express.urlencoded({ extended: true })

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, express and postgres' });
});

app.use('/postgreDB', postgreRouter);
app.use('/redshiftDB', redshiftRouter);
app.use('/mssqlDB', mssqlRouter);
app.use('/google_bigqueryDB', googleBigqueryRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}...`);
})