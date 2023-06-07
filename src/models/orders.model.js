const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Orders = db.define(
  "orders",
  {
    totalPrice: {
      type: DataTypes.REAL,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    timestamps: false
  }
)