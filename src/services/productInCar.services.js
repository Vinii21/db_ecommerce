const { createProductInCar, getOneProduct, updateTotal, updateQantity, getProductInCar } = require("../repositories/productInCar.repository");

class ProductInCarServices {
  static async createProductInCarService(dataProductInCar) {
    return await createProductInCar(dataProductInCar);
  }

  static async addNewProducts(data) {
    try {
      // ? Existe el producto para esta orden
      const product = await getOneProduct(data.id);
      await updateTotal(data.price, data.id);
      console.log("actualizando")
      if (!product) {
        return await createProductInCar(data);
      }

      return await updateQantity(data.id);
    } catch (error) {
      throw error;
    }
  }

  static async getProductInCarServices() {
    return await getProductInCar();
  }


}

module.exports = ProductInCarServices
