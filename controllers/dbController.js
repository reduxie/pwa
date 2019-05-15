const express = require('express');

const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../db/database');
const Job = require('../db/models/Job');

router.get('/', (req, res) =>
  Job.findAll()
    .then(jobs => {
      console.log(jobs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
