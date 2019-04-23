const express = require('express');
const app = express();
const path = require('path');

// uncomment the below for proxy challenge
const leaderList = [
  { name: 'Anna', id: 'a0' },
  { name: 'Ben', id: 'b0' },
  { name: 'Clara', id: 'c0' },
  { name: 'David', id: 'd0' },
];

app.get('/api/leaders', (req, res) => {
  res.send(leaderList);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV === 'production') {
  console.log("using production mode")
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  })
}

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

