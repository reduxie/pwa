"use strict";

const cheerio = require("cheerio");
const axios = require("axios");
const URL = "https://www.builtinnyc.com/jobs?f[0]=job-category_developer-engineer";
// const postURL = "https://www.builtinnyc.com/ajax-callback/jobs?f[0]=job-category_developer-engineer&page=1&hash-changes=2";

const scraperController = {

  getData: async (req, res, next) => {
    try {
      const response = await axios.get(URL);
      const data = response.data;
      res.locals = data;
      return next();
    } catch (err) {
      console.error(err)
    }
  },

  allPostings: async (req, res, next) => {
    try {
      const $ = await cheerio.load(res.locals);
      const baseURL = `http://www.builtinnyc.com`;
      let jobTitles = [];
      // > JOBS OBJECT
      $('.center-main').each(function (i, el) {
        jobTitles.push({
          link: baseURL.concat($('.bottom-row > .wrap-view-page > a', el).attr('href')),
          jobTitle: $('.title', el).text(),
          companyTitle: $('.company-title', el).text(),
          description: $('.description', el).text(),
        });
      })

      res.locals = jobTitles;
      return next();
    } catch (err) {
      console.error(err);
    }
  },

  //  TODO: not returning out res.locals
  getDetails: async (req, res, next) => {
    try {
      res.locals.forEach(async (el, i, arr) => {
        const response = await axios.get(el.link);
        const $ = await cheerio.load(response.data);

        const objWrapper = JSON.parse($('script[type="application/ld+json"]').html());
        const entry = objWrapper[ '@graph' ][ 0 ]
        const address = entry.jobLocation.address;
        const description = entry.description;
        const datePosted = new Date(entry.datePosted);

        arr[ i ].datePosted = datePosted;
        arr[ i ].address = address;
        arr[ i ].description = description;

        console.log('\n\nFIRST!!!\n\n', i)
        return res.locals;
      })
      return next();
    } catch (err) {
      console.error(err)
    }
  }

  getOnePost: async (req, res, next) => {
    try {
      console.log('hello');
      // res.locals.forEach(async (el, i, arr) => {
      //   const response = await axios.get(el.link);
      //   const $ = await cheerio.load(response.data);

      //   const objWrapper = JSON.parse($('script[type="application/ld+json"]').html());
      //   const entry = objWrapper[ '@graph' ][ 0 ]
      //   const address = entry.jobLocation.address;
      //   const description = entry.description;
      //   const datePosted = new Date(entry.datePosted);

      //   arr[ i ].datePosted = datePosted;
      //   arr[ i ].address = address;
      //   arr[ i ].description = description;

      //   console.log('\n\nFIRST!!!\n\n', i)
      //   return res.locals;
      // })
      return next();
    } catch (err) {
      console.error(err)
    }
  }
};

module.exports = scraperController;
