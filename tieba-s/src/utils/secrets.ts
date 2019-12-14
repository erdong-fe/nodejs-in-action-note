import dotenv from "dotenv";
import fs from "fs";
import logger from "./logger";

if(fs.existsSync('.env')) {
  logger.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  logger.debug("Using .env.default file to supply config environment variables");
  dotenv.config({ path: ".env.default" }); 
}

const isProd = process.env.NODE_ENV === 'production';

export const SESSION_SECRET = process.env['SESSION_SECRET'];
export const MONGODB_URI = 
  isProd ? process.env['MONGODB_URI'] : process.env['MONGODB_URI_LOCAL'];

if (!SESSION_SECRET) {
  logger.error("No client secret. Set SESSION_SECRET environment variable.");
  process.exit(1);
}

if (!MONGODB_URI) {
  if (isProd) {
      logger.error("No mongo connection string. Set MONGODB_URI environment variable.");
  } else {
      logger.error("No mongo connection string. Set MONGODB_URI_LOCAL environment variable.");
  }
  process.exit(1);
}