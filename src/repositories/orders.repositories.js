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

module.exports = {
  getOrderByUser
}