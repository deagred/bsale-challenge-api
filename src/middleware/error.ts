import { NextFunction, Request, Response } from "express";
import ApiError from "./ApiError";
import * as Logger from '../utils/Logger';


export default function errorHandler(err: ApiError, req: Request, res: Response, next: NextFunction) {
  Logger.warn(err.message);

  if (!err) {
    return res.status(500).send({ error: 'An unknown error occurred.' });
  }

  if (err.safe) {
    return res.status(err.code || 500).send({ error: err.message });
  }

  return res.status(err.code || 500).send({ error: 'An unknown error occurred.' });
}

