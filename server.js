'use strict';

const express = require('express');
const superagent = require('superagent');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
    console.log('The server is now running on port' + PORT);
});



