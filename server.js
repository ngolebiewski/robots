const express = require('express');
const app = express();
const router = express.Router();

const client = require('./db/client.cjs');
console.log('client');
client.connect();

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use('/api/v1', require('./api/index.js'));

