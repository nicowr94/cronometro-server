import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Mark = sequelize.define(
  "mark",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_date: {
      type: Sequelize.DATE,
    },
    end_date: {
      type: Sequelize.DATE,
    },
    time_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);

export default Mark;
