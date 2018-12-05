'use strict';

const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));
const path = require('path');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://${process.env.TEST_DB_USERNAME}:${process.env.TEST_DB_PASSWORD}@ds123454.mlab.com:23454/kentaro-test');

// const Schema = mongoose.Schema;
app.get('/',(req, res)=>{
    res.sendFile('index.html',{root: './'});
});

app.listen(PORT, () => {
    console.log('The server is now running on port' + PORT);
});

app.get('*',(req, res)=>{
    res.send('<img src="http://http.cat/500" />');
});