const { Router } = require('express');
const { createProductInCarController, addProductsToCar, getProductInCarController, purchesProductInCarController } = require('../controllers/productInCar.controlles');

const router = Router();

router.post("/productInCar", createProductInCarController);
router.post("/productInCar/:id/products", addProductsToCar);
router.get("/productInCar/", getProductInCarController);
router.get("/productInCar/clear", purchesProductInCarController);

module.exports = router;

