import express from 'express';

const bodyParser = require('body-parser');
const path = require('path');
const imagesAPIController = require('./controllers/imagesAPIController');
const addToDbController = require('./controllers/addToDbController');
const getDbImagesController = require('./controllers/getDbImagesController');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  return next();
});

// POST to search images from api by keyword
app.post(
  '/searchImages',
  imagesAPIController,
  (req: express.Request, res: express.Response) => {
    res.send(res.locals.data);
  }
);

app.get(
  '/getDbImages',
  getDbImagesController,
  (req: express.Request, res: express.Response) => {
    if (res.locals.err) res.send(res.locals.err);
    res.send(res.locals.data);
  }
);

app.post(
  '/addImageToFavsTable',
  addToDbController,
  (req: express.Request, res: express.Response) => {
    if (res.locals.err) res.send(res.locals.err);
    res.send();
  }
);

app.delete(
  '/removeImageFromFavTable',
  (req: express.Request, res: express.Response) => {
    res.send('in   /removeImageFromFavTable');
  }
);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}
