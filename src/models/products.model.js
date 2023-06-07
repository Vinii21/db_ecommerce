const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Products = db.define(
  "products",
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    productImage: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "product_image"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Products
