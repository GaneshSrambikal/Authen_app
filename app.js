const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to db
mongoose.connect(config.database);

//on connected
mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb' + config.database);

});

//on db connection error
mongoose.connection.on('error', (err) => {
    console.log('Connected to mongodb' + err);

});

const app = express();

const users = require('./routes/users');


const port = 3000;
//cors middleware
app.use(cors());

//seet statc folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Invalid connect');
});

app.listen(port, () => {
    console.log("server started on port " + port);
});