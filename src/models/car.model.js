const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Car = db.define(
  "car",
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },
    totalPrice: {
      type: DataTypes.REAL,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = Car