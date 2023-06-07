const { createProducts } = require("../repositories/products.repositories")

class ProductService {
  static async createNewProduct(newProduct) {
    try {
      const product = await createProducts(newProduct);
      return product;
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductService