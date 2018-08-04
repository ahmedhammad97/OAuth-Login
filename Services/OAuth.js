const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const facebookStrategy = require('passport-facebook');
const keys = require('./keys');

passport.use(new googleStrategy({
  //options
  callbackURL: '/auth/google/redirect',
  clientID : keys.google.id,
  clientSecret : keys.google.secret
  }, ()=>{
  //callback function
  })
)
