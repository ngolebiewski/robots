const express = require('express');
const app = express();
const router = express.Router();

require('dotenv').config();

const client = require('./db/client.cjs');
console.log('client');
client.connect();

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res, next) => {
  res.send('<h1>Hello World!</h1>');
});


app.use('/api/v1', require('./api/index.js'));

