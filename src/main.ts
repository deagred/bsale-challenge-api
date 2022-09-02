import cors from 'cors';
import express from 'express';
import errorHandler from './middleware/error';
import logMiddleware from './middleware/logger';
import router from './routes';
import * as Logger from './utils/Logger';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(logMiddleware);

// Routes
app.use("/", router);
app.use(errorHandler);

app.listen(process.env.PORT, async () => {
  Logger.info(`${process.env.APP_NAME} listening on port ${process.env.PORT}`);
})
