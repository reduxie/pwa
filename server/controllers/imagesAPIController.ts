import * as express from 'express';

const fetch = require('node-fetch');

module.exports = (
  req: express.Request,
  res: express.Request,
  next: express.NextFunction
) => {
  const { image } = req.body;
  const URL: string = `https://pixabay.com/api/?key=12543231-c905ff0a34449838e030e5931&q=${image}&image_type=photo`;
  fetch(URL)
    .then((response: any) => response.json())
    .then((data: any) => {
      res.locals.data = data;
      return next();
    });
};
