const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');


const port = 3000;
//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Invalid connect');
});

app.listen(port, () => {
    console.log("server started on port " + port);
});