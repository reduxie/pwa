import express from 'express';

const fs = require('fs');
const request = require('request');

const download = function (uri: any, filename: any, callback: any) {
  request.head(uri, function (err: any, res: express.Response, body: any) {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
};

download(
  'https://www.google.com/images/srpr/logo3w.png',
  'google.png',
  function () {
    // console.log('done');
  }
);
