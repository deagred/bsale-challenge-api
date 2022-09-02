import util from "util";
import { addColors, createLogger, format, transports } from "winston";
const { combine, colorize, timestamp, printf } = format;

const loggerLevels = {
  colors: {
    info: "green",
    error: "underline bold red",
    debug: "bold magenta",
    warn: "yellow",
  },
};

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const winston = createLogger({
  format: combine(
    format((info) => {
      info.level = info.level.toUpperCase();
      return info;
    })(),
    timestamp({
      format: "DD.MM.YY HH:mm:ss.SSS",
    }),
    colorize(),
    logFormat
  ),
  transports: [
    new transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});
addColors(loggerLevels.colors);

if (process.env.LOG_LEVEL) {
  winston.transports[0].level = process.env.LOG_LEVEL;
  winston.info(`Setting log level to ${winston.transports[0].level}`);
} else {
  winston.transports[0].level = "info";
  winston.info(`Setting log level to ${winston.transports[0].level}`);
}

const info = (...args: any) => {
  winston.info(args);
};

const error = (...args: any) => {
  winston.error(args);
};

const debug = (...args: any) => {
  winston.debug(args);
};

const warn = (...args: any) => {
  winston.warn(args);
};

const json = (...args: any) => {
  winston.debug(util.inspect(args));
};

export { info, error, debug, warn, json };
