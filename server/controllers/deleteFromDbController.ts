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
  const data: any = {
    id: req.body.image.id,
  };
  console.log(data);
  const query: {} = {
    text: `DELETE FROM user_img WHERE id = ($1)`,
    values: [data.id],
  };

  pool.query(query, (err: any, data: any) => {
    if (err) {
      console.log(err);
      return next();
    }
    return next();
  });
};
