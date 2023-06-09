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

const updateStatusOrder = async (id) => {
  const order = await Orders.update({status: false},{
    where: {id}
  });
  return order;
}



module.exports = {
  getOrderByUser,
  createOrder,
  updateStatusOrder
}