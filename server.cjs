const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

require('dotenv').config();

const client = require('./db/client.cjs');
console.log('client');
client.connect();

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// app.get("/", (req, res, next) => {
//   res.send('<h1>Hello Robots!</h1>');
// });

app.use("/assets", express.static('dist/assets'));

app.get("/", (req, res, next) => {
  console.log(path.join(__dirname, 'dist', 'index.html'))
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});


app.use('/api/v1', require('./api/index.cjs'));

