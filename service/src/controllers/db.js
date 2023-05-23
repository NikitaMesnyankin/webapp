"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbController = void 0;
const sequelize_1 = require("sequelize");
const configs_1 = require("../configs/configs");
const operatorAliases = {
    $or: sequelize_1.Op.or,
    $and: sequelize_1.Op.and,
};
exports.dbController = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: configs_1.config.DB_HOST,
    port: configs_1.config.DB_PORT,
    database: configs_1.config.DB_NAME,
    username: configs_1.config.DB_USER,
    password: configs_1.config.DB_PASSWORD,
    omitNull: true,
    operatorsAliases: operatorAliases
});
//# sourceMappingURL=db.js.map