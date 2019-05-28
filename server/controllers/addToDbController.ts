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
  const pool: any = connectToDb();
  const data: dbObj = {
    userId: req.body.userId,
    imgId: req.body.image.id,
    imgUrl: req.body.image.webformatURL,
    imgLikes: req.body.image.likes,
  };
  const query: {} = {
    text:
      'INSERT INTO user_img(user_id, img_id, img_url, img_likes) VALUES($1, $2, $3, $4)',
    values: [data.userId, data.imgId, data.imgUrl, data.imgLikes],
  };

  pool.query(query, (err: any, data: any) => {
    if (err) {
      console.log(err);
      return next();
    }
    return next();
  });
};
