const { getOrderByUser, createOrder, updateStatusOrder } = require("../repositories/orders.repositories");

class OrderServices {
  static async getOrderByUserService(userId) {
    try {
      return await getOrderByUser(userId);
    } catch (error) {
      throw error
    }
  }
  static async createOrderService(orderData) {
    try {
      return await createOrder(orderData);
    } catch (error) {
      throw error
    }
  }
  static async updateStatusService(id) {
    try{
      const order = await updateStatusOrder(id)
    } catch (error) {
      throw error
    }
  }
}

module.exports = OrderServices