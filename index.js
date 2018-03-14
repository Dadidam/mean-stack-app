const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// PORT from environment for production deployment
// For development we use 4999 port number
const PORT = process.env.PORT || 4999;
app.listen(PORT);
