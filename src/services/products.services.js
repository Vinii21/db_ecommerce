const { createProducts, updateDescription } = require("../repositories/products.repositories")

class ProductService {
  static async createNewProduct(newProduct) {
    try {
      const product = await createProducts(newProduct);
      return product;
    } catch (error) {
      throw error
    }
  }

  

  static async updateProductDescriptioService(description, id) {
    try {
      const product = await updateDescription(description, id);
      return product;
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductService