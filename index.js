const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// PORT from environment for production deployment
// For development we use 4999 port number
const PORT = process.env.PORT || 4999;
app.listen(PORT);
