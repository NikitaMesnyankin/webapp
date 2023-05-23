import { Options, Sequelize, Op } from "sequelize";
import { config } from "../configs/configs";

const operatorAliases = {
  $or: Op.or,
  $and: Op.and,
}
export const dbController = new Sequelize({
  dialect: "postgres",
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  omitNull: true,
  operatorsAliases: operatorAliases
} as Options);