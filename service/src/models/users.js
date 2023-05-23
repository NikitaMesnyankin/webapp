"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt_1 = require("bcrypt");
const db_1 = require("../controllers/db");
const sequelize_1 = require("sequelize");
const configs_1 = require("../configs/configs");
exports.User = db_1.dbController.define('user', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        autoIncrementIdentity: true
    },
    login: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        set(value) {
            this.setDataValue("password", (0, bcrypt_1.hashSync)(configs_1.config.SALT_STRING, (0, bcrypt_1.genSaltSync)(10)));
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    is_activated: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    activation_link: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)(),
    },
    nickname: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: true,
    },
    rating: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    about: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    freezeTableName: true,
    tableName: "users",
    underscored: true,
    updatedAt: "modified_at"
});
//# sourceMappingURL=users.js.map