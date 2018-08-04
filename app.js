const express = require('express');
const path = require('path');
const routes = require('./Routes/REST');
const passport = require('passport');
const passportSetup = require('./Services/OAuth');
const cookieSession = require('cookie-session');
const keys = require('./Services/keys');


// Main app
const app = express();

//For static front-end files
app.use(express.static('Public'));

//Cookies
app.use(cookieSession({
  name: 'session',
  keys: [keys.cookies.encryptionKey],

  // Cookie Options
  maxAge: 5 * 60 * 1000 // 5 mins.
}))

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/Public'));

//Listen to port
app.listen(7050, () => {
    console.log('Wohooo, now listening to port 7050');
});

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


//Routing
app.use(routes);
