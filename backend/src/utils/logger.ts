import morgan, { StreamOptions } from 'morgan';
import { Request, Response } from 'express';

const stream: StreamOptions = {
  write: (message) => console.log(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

const logger = morgan('combined', { stream, skip });

export default logger;
