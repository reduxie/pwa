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
    userId: req.params.userId,
  };

  const query: {} = {
    text: `SELECT * FROM user_img WHERE user_id = ($1)`,
    values: [data.userId],
  };

  pool.query(query, (err: any, data: any) => {
    if (err) {
      res.locals.err = err;
      return next();
    }
    res.locals.data = data.rows;
    return next();
  });
};
