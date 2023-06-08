const Orders = require('../models/orders.model');
const Users = require('../models/users.model');

const getOrderByUser = async (userId) => {
  const orderUser = await Orders.findAll({
    where: { userId },
    include: [
      {
        model: Users,
        attributes: {
          exclude: ["password", "validUser"]
        }
      }
    ]
  })
  return orderUser;
}

const createOrder = async (orderData) => {
  const order = await Orders.create(orderData);
  return order;
}



module.exports = {
  getOrderByUser,
  createOrder
}