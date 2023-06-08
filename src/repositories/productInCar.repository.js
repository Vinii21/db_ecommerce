const ProductInCar = require("../models/productInCar.model");

const createProductInCar = async (dataProductInCar) => {
  const productInCar = await ProductInCar.create(dataProductInCar);
  return productInCar;
}

const updateTotal = async (price, id) => {
  const order = await ProductInCar.increment({ price: price }, {
    where: { id }
  })
  return order;
}

const getOneProduct = async (id) => {
  console.log(id)
  const product = await ProductInCar.findOne({
    where: { id }
  });
  console.log(product)
  return product;
}

const updateQantity = async (id) => {
  console.log("entro a updateQuantity");
  const product = await ProductInCar.increment({
    quantity: 1
  }, { where: { id } })
  return product;
}

const getProductInCar = async () => {
  const productInCar = await ProductInCar.findAll();
  return productInCar;
}




module.exports = { createProductInCar, updateTotal, getOneProduct, updateQantity, getProductInCar }