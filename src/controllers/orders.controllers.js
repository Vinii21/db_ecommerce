const OrderServices = require("../services/orders.services");


const getOrdersByUserController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const orderByUser = await OrderServices.getOrderByUserService(userId);
    res.json(orderByUser);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getOrdersByUserController
}