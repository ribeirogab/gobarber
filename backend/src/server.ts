import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import './configs/dotenv';
import './database';

import routes from './routes';
import uploadConfig from './configs/upload';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((error: Error, req: Request, res: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.listen(3333, () => {
  console.log('Server is running');
});
