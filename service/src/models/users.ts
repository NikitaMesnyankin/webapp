import { genSaltSync, hashSync } from "bcrypt";
import { dbController } from "../controllers/db";
import { DataTypes, UUIDV4 } from "sequelize";
import { config } from "../configs/configs";

export const User = dbController.define('user', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    autoIncrementIdentity: true
  },
  login: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    set(value: string)  {
      this.setDataValue("password", hashSync(config.SALT_STRING, genSaltSync(10)));
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  activationLink: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    defaultValue: UUIDV4(),
  },
  nickname: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  freezeTableName: true,
  tableName: "users",
  underscored: true,
  updatedAt: "modified_at"
});