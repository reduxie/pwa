import * as express from 'express';

const fetch = require('node-fetch');

module.exports = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log('this is req', req.body)
  const { image } = req.body;
  console.log(image);
  const URL: string = `https://pixabay.com/api/?key=12543231-c905ff0a34449838e030e5931&q=${image}&image_type=photo`;
  fetch(URL)
    .then((response: any) => response.json())
    .then((data: any) => {
      console.log('this is the data', data)
      const dataArray: any = [];
      for (let i = 0; i < data.hits.length; i += 1) {
        const pushObj: any = {
          previewURL: data.hits[i].previewURL,
          webformatURL: data.hits[i].webformatURL,
          likes: data.hits[i].likes,
          tags: data.hits[i].tags,
        };
        dataArray.push(pushObj);
      }
      res.locals.data = dataArray;
      return next();
    });
};
