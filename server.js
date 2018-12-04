'use strict';

const express = require('express');
const superagent = require('superagent');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://${process.env.TEST_DB_USERNAME}:${process.env.TEST_DB_PASSWORD}@ds123454.mlab.com:23454/kentaro-test');

const Schema = mongoose.Schema;


app.listen(PORT, () => {
    console.log('The server is now running on port' + PORT);
});

app.get('*',(req, res)=>{
    res.send('<img src=http://http.cat/500" />');
});

app.get('/',(req, res)=> {
    res.sendFile('views/pages/index.html');
});




