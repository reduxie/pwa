const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dbController = require('../controllers/dbController');
const db = require('../db/database');

app.use('/jobs', require('../controllers/dbController'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// statically serve everything in the build folder on the route '/build'
// if (process.env.NODE_ENV === 'production') {
console.log('using production mode');
app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// > TEST DB
db.authenticate()
  .then(() => console.log('\n\nDatabase connected...\n\n'))
  .catch(err => console.log(`Error: ${err}`));

app.listen(3000);
