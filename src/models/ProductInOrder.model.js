const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const ProductInOrder = db.define(
  "product_in_order",
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    },
    status:{
      type: DataTypes.INTEGER,
      defaultValue:false
    }
  }, {
  timestamps: false
}
)