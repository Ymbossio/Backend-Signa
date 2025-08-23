import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.NODE_PORT ? parseInt(process.env.NODE_PORT, 10) : 5432;


const dialectOptions = process.env.NODE_ENV !== 'development'
  ? {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  : {};

const config = {
  dialect: process.env.NODE_DIALECT,  
  host: process.env.NODE_HOST,
  username: process.env.NODE_USER,
  password: process.env.NODE_PASSWORD,
  port: port,
  database: process.env.NODE_DATABASE,
  dialectOptions,
  logging: false,
};

export default config;
