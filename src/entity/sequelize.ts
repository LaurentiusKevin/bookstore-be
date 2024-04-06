import { Sequelize } from "sequelize";

const sequelize = new Sequelize("hyperhire_bookstore", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: (str) => {
    console.info(str);
  },
});

export default sequelize;
