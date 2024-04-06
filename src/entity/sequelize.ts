import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "hyperhire_bookstore",
  process.env.DB_USERNAME || "postgres",
  process.env.DB_PASSWORD || "postgres",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: (str) => {
      console.info(str);
    },
  }
);

export default sequelize;
