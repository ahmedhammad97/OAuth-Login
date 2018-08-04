const express = require('express');
const path = require('path');
const routes = require('./Routes/REST');
const passportSetup = require('./Services/OAuth');

// Main app
const app = express();

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/Public'));

//Listen to port
app.listen(7050, () => {
    console.log('Wohooo, now listening to port 7050');
});

//For static front-end files
app.use(express.static('Public'));

//Routing
app.use(routes);
