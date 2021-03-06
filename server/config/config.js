const dotenv = require('dotenv');

// .env 파일의 DB_PASSWORD를 가져오기 위해
dotenv.config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql"
  }
}
