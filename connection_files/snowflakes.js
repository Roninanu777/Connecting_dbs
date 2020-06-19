const express = require('express');
const snowflake = require('snowflake-sdk');

const connection = snowflake.createConnection({
    account: 'redoc777.ap-south-1.aws',
    username: 'redoc777',
    password: '@AnghaNanu777'
})

connection.connect((err, conn) => {
    if(err){
        console.log('Unable to connect: ' + err.message);
    }
    else{
        console.log('Successfully connected to snowflake.');
        connection_ID = conn.getId();
    }
})