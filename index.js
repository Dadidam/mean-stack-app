const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecrent: keys.googleClientSecret,
      callbackURL: 'auth/google/callback'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

// PORT from environment for production deployment
// For development we use 4999 port number
const PORT = process.env.PORT || 4999;
app.listen(PORT);
