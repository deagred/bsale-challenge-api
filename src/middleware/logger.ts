import { NextFunction, Request, Response } from 'express';
import * as Logger from '../utils/Logger';


export default function logger(req: Request, res: Response, next: NextFunction) {
  Logger.info(`[${req.ip} - ${req.method}] ${req.path}`);
  next();
}
