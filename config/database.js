'use strict';

const Sequelize = require('sequelize');
const config = require('./config');

module.exports = new Sequelize(config.db.name, config.db.userName, config.db.password, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});