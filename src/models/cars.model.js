const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Cars = db.define(
  "cars",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },
    totalPrice: {
      type: DataTypes.REAL,
      allowNull: false,
      field: "total_price"
    }
  },
  {
    timestamps: false
  }
)

module.exports = Cars