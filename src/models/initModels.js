// importar los modelos
const Users = require("./users.model");
const Cars = require("./cars.model")
const Products = require("./products.model")
const ProductInCar = require("./productInCar.model")
const Orders = require("./orders.model")
const ProductInOrder = require("./ProductInOrder.model")


const initModels = () => {

  Users.hasOne(Cars, {foreignKey:"userId"});
  Cars.hasOne(Users, {foreignKey: "userId"});

  Orders.belongsTo(Users, {foreignKey:"userId"});
  Users.hasMany(Orders, {foreignKey:"userId"});
  
  Products.belongsTo(Users, {foreignKey: "userId"});
  Users.hasMany(Products, {foreignKey: "userId"});
  
  Orders.belongsToMany(Products, { through: ProductInOrder, foreignKey:"orderId", otherKey:"productId", timestamps: false});
  Products.belongsToMany(Orders, { through: ProductInOrder, foreignKey:"productId", otherKey:"orderId", timestamps: false});

  Cars.belongsToMany(Products, { through: ProductInCar, foreignKey:"carId", otherKey: "productId", timestamps: false});
  Products.belongsToMany(Cars, { through: ProductInCar, foreignKey:"productId", otherKey:"carId", timestamps: false});

/*   Users.belongsToMany(Products, { through: ProductInOrder, foreignKey: "userId", otherKey: "conversationId", timestamps: false });
  Products.belongsToMany(Users, { through: ProductInCar, foreignKey: "conversationId", otherKey: "userId", timestamps: false }); */

};

module.exports = initModels;

