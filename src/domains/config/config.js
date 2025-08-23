import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
  dialectOptions: process.env.NODE_ENV !== 'development' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {},
  logging: console.log,
};

export default config;
