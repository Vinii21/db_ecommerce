const Products = require("../models/products.model");

const createProducts = async (newProduct) => {
  const produc = await Products.create(newProduct);
  return produc;
}

module.exports = { createProducts }