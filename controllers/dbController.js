'use strict';

const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Job = require('../models/Job')
const Sequelize = require('sequelize');


// Note: using `force: true` will drop the table if it already exists
// Job.sync({ force: true })
//   .then(() => {
//     // Now the `users` table in the database corresponds to the model definition
//     return Job.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });

// > GET ALL, this should populate the site
router.get('/', (req, res) =>
  // res.send('you gonna get a job!')
  Job.findAll()
    .then(jobs => {
      console.log(jobs);
      res.sendStatus(200);
      //   /* res.render('gigs', {
      //   gigs })*/
    })
    .catch(err => console.log(err)));

// > SEARCH
// router.get('/search', (req, res) => {
//   let { term } = req.query;
//   term = term.toLowerCase();
//   Gig.findAll({})
//     .then(/*jobs =>  res.render('gigs', { gigs } )*/)
//     .catch(err => console.log(err));
// });

// > ADD
// router.post('/add', (req, res) => {
//   let { /* title, technologies, budget, description, contact_email */ } = req.body;
//   let errors = [];

// > Validate Fields
//   if (!title) {
//     errors.push({ text: 'Please add a title' });
//   }
//   if (!technologies) {
//     errors.push({ text: 'Please add some technologies' });
//   }
//   if (!description) {
//     errors.push({ text: 'Please add a description' });
//   }
//   if (!contact_email) {
//     errors.push({ text: 'Please add a contact email' });
//   }
//   if (errors.length > 0) {
//     res.render('add', {
//       /* errors,
//       title,
//       technologies,
//       budget,
//       description,
//       contact_email */
//     });
//   } else {
//     if (!budget) {
//       budget = 'Unknown';
//     } else {
//       budget = `$${budget}`;
//     }
//     //> Make lowercase and remove space after comma
//     technologies = technologies.toLowerCase().replace(/, /g, ',');
//     //> Insert into table
//     Gig.create({
//       /* title,
//       technologies,
//       description,
//       budget,
//       contact_email */
//     })
//       .then(jobs => res.redirect('/jobs'))
//       .catch(err => console.log(err));
//   }
// });

module.exports = router;