const express = require('express');
const app = express();
const path = require('path');
const scraperController = require('../controllers/scraper');
const dbController = require('../controllers/dbController');
const bodyParser = require('body-parser');
const db = require('../config/database');

// uncomment the below for proxy challenge

// app.get('/api/leaders', (req, res) => {
//   res.send(leaderList);
// });

app.use('/jobs', require('../controllers/dbController'));

app.use(bodyParser.urlencoded({ extended: false }));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// statically serve everything in the build folder on the route '/build'
// if (process.env.NODE_ENV === 'production') {
console.log("using production mode")
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
})
// }

// > TEST DB
db.authenticate()
  .then(() => console.log('\n\n\n\nDatabase connected...\n\n'))
  .catch(err => console.log('Error: ' + err))

app.get('/scrape',
  scraperController.getData, scraperController.allPostings,
  scraperController.getDetails,
  (req, res) => {
    console.log('\n\nSECOND!!!\n\n', res.locals)
    res.send(res.locals)
  }
);

app.get('/getpost',
  scraperController.getOnePost,
  // (req, res) => {
  //   console.log('\n\nSECOND!!!\n\n', res.locals)
  //   res.send(res.locals)
  // }
);
app.listen(3000);




