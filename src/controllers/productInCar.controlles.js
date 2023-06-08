const ProductInCarServices = require("../services/productInCar.services");

const createProductInCarController = async (req, res, next) => {
  try {
    const dataProductInCar = req.body;
    await ProductInCarServices.createProductInCarService(dataProductInCar);
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const addProductsToCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { carId, productId, quantity, price } = req.body;
    await ProductInCarServices.addNewProducts({
      id,
      carId,
      productId,
      price,
      quantity,
    })
    res.status(201).send();
  } catch (error) {
    next(error)
  }
};

const getProductInCarController = async (req, res, next) => {
  try {
    const productInCar = await ProductInCarServices.getProductInCarServices();
    res.json(productInCar);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createProductInCarController,
  addProductsToCar,
  getProductInCarController
}