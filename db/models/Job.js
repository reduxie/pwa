const Sequelize = require('sequelize');
const db = require('../database');

const Job = db.define('job', {
  link: {
    type: Sequelize.STRING,
  },
  jobTitle: {
    type: Sequelize.STRING,
  },
  companyTitle: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  saved: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Job;
