const express = require('express');
const snowflake = require('snowflake-sdk');

const connection = snowflake.createConnection({
    account: '<account_name>',
    username: '<username>',
    password: '<password>'
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