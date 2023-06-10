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
  const order = await Orders.update({status: true},{
    where: {id}
  });
  return order;
}

const updateTotalPriceOrder = async (price, id) => {
  if(price === 0) {
      const car = await Orders.update({totalPrice: price},{
          where: {id}
      })
      return car;
  }
  const car = await Orders.increment({totalPrice: price}, {
      where: {id}
  })
  return car;
}

const getOneOrder = async ( data) => {
  const order = await Orders.findOne({
    where: { id:data.orderId, userId: data.userId }
  });
  return order;
}



module.exports = {
  getOrderByUser,
  createOrder,
  updateStatusOrder,
  updateTotalPriceOrder,
  getOneOrder
}