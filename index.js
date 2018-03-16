const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

// PORT from environment for production deployment
// For development we use 4999 port number
const PORT = process.env.PORT || 4999;
app.listen(PORT);
