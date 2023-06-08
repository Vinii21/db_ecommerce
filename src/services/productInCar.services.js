const { createProductInCar, getOneProduct, updateTotal, updateQantity, getProductInCar, pourchaseProduct, clearProductInCar } = require("../repositories/productInCar.repository");

class ProductInCarServices {
  static async createProductInCarService(dataProductInCar) {
    return await createProductInCar(dataProductInCar);
  }

  static async addNewProducts(data) {
    try {
      // ? Existe el producto para esta orden
      const product = await getOneProduct(data.id);
      await updateTotal(data.price, data.id);
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

  static async clearProductInCarServices(dataProduct) {
    try {
      const updateStatu = await pourchaseProduct(dataProduct);
      const listCar = await clearProductInCar(dataProduct.carId);
      
      return listCar;
    } catch (error) {
      throw error;
    }

  }


}

module.exports = ProductInCarServices
