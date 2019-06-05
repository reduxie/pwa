import * as express from 'express';

import { connectToDb } from './connectToDb';

module.exports = {

loginUser:  ( req: express.Request, res: express.Response, next: express.NextFunction) => {
              const pool: any = connectToDb();
              console.log(req.body);
              const query: {} = {
                text: `SELECT id, username FROM users WHERE username = ($1) and pw = ($2)`,
                values: [req.body.userName, req.body.pw],
              };
              pool.query(query, (err: any, data: any) => {
                if (err || data.rows.length === 0) {
                  console.log("error in authController loginUser");
                  console.log(err);
                  return res.send(404);
                } else {

                  res.locals.data = {userId: data.rows[0].id, userName: data.rows[0].username};
                  return next();
                }
              });
            },
signupUser: ( req: express.Request, res: express.Response, next: express.NextFunction) => {
              const pool: any = connectToDb();
              console.log(req.body);
              const query: {} = {
                text: `INSERT INTO users (username, pw) VALUES (($1), ($2)) RETURNING id, username`,
                values: [req.body.userName, req.body.pw],
              };
              pool.query(query, (err: any, data: any) => {
                if (err || data.rows.length === 0) {
                  console.log("error in authController signup", err);
                  return res.send(404);
                } else {

                  res.locals.data = {userId: data.rows[0].id, userName: data.rows[0].username};
                  return next();
                }
              });
            },
}
