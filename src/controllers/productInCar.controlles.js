const ProductInCarServices = require("../services/productInCar.services");
const CarsServices = require("../services/cars.services")


const addProductsToCar = async (req, res, next) => {
  try {
    const { carId, productId, quantity, price } = req.body;
    await ProductInCarServices.addNewProducts({
      carId,
      productId,
      price,
      quantity,
    })
    res.status(201).send()
    await CarsServices.updateTotalPrice(price, carId);
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

const purchesProductInCarController = async (req, res, next) => {
  try {
    const dataProduct = req.body;
    const productCar = await ProductInCarServices.clearProductInCarServices(dataProduct)
    res.json(productCar);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  addProductsToCar,
  getProductInCarController,
  purchesProductInCarController
}