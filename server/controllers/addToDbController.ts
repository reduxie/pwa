import * as express from 'express';

import { connectToDb } from './connectToDb';

interface dbObj {
  userId: number;
  imgId: number;
  imgUrl: string;
  imgLikes: number;
}

module.exports = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log('this is req.bodyyy', req.body)
  const pool: any = connectToDb();
  const data: dbObj = {
    userId: 1,
    imgId: req.body.id,
    imgUrl: req.body.webformatURL,
    imgLikes: req.body.likes,
  };

  const query: {} = {
    text:
      'INSERT INTO user_img(user_id, img_id, img_url, img_likes) VALUES($1, $2, $3, $4)',
    values: [data.userId, data.imgId, data.imgUrl, data.imgLikes],
  };

  pool.query(query, (err: any, data: any) => {
    if (err) {
      res.locals.err = err;
      return next();
    }
    res.locals.data = data;
    return next();
  });
};
