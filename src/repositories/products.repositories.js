const Products = require("../models/products.model");

const createProducts = async (newProduct) => {
  const produc = await Products.create(newProduct);
  return produc;
}

const updateDescription = async (description, id) => {
  const product = await Products.update({
    description: description
  }, {
    where: { id }
  })
  return product;
}

module.exports = { createProducts, updateDescription }