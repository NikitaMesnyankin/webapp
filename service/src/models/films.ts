import { dbController } from "../controllers/db";
import { DataTypes } from "sequelize";

export const Film = dbController.define('film', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    autoIncrementIdentity: true
  },
  name: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false
  },
  country: {
    type: DataTypes.ENUM("RUS", "BEL", "ARM", "KAZ", "UNK"),
    allowNull: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avgRating: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  freezeTableName: true,
  tableName: "films",
  underscored: true,
  updatedAt: "modified_at"
});