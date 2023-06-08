const { getOrderByUser } = require("../repositories/orders.repositories");

class OrderServices {
  static async getOrderByUserService(userId) {
    try {
      return await getOrderByUser(userId);
    } catch (error) {
      throw error
    }
  }
}

module.exports = OrderServices