import express, { NextFunction, Request, Response } from 'express';

const app = express();

function middleware(req: Request, _res: Response, next: NextFunction) {
  req.boo = 'foo';
  console.log('Hello World!');
  next();
}
app.get('/', middleware, (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
