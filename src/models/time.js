import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Mark from "./mark";

const Time = sequelize.define(
  "time",
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
    duration: {
      type: Sequelize.DOUBLE,
    },
  },
  { timestamps: false, freezeTableName: true }
);

Time.hasMany(Mark, { foreingKey: "time_id", sourceKey: "id" });
Mark.belongsTo(Time, { foreingKey: "time_id", sourceKey: "id" });

export default Time;
