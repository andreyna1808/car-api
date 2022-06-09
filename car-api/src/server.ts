import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import 'reflect-metadata';
import 'express-async-errors';

import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';
import './shared/container';
import { Errors } from './errors/Errors';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use((err: Error, reqe: Request, res: Response, next: NextFunction) => {
  if (err instanceof Errors) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({
    status: 'error',
    message: `INTERNAL SERVER ERROR -  ${err.message}`,
  });
});
app.use(router);

app.listen(3333, () => {
  console.log('Server running http://localhost:3333');
});
