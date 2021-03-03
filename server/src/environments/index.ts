import * as dotenv from 'dotenv';
dotenv.config();

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development';

// postgres
const POSTGRES_URL: string = +process.env.POSTGRES_PORT
  ? `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}`
  : process.env.POSTGRES_URL;

// typeorm
const enviroment = {
  development: {
    url: POSTGRES_URL,
  },
  testing: {
    url: POSTGRES_URL,
  },
  staging: {
    url: POSTGRES_URL,
  },
  production: {
    url: POSTGRES_URL,
  },
};
const TYPEORM = enviroment[NODE_ENV];

export { TYPEORM };
