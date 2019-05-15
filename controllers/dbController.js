const express = require('express');

const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../config/database');
const Job = require('../models/Job');

router.get('/', (req, res) =>
  Job.findAll()
    .then(jobs => {
      console.log(jobs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
