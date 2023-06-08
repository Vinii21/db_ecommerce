const { Router } = require('express');
const { createProductInCarController, addProductsToCar, getProductInCarController } = require('../controllers/productInCar.controlles');

const router = Router();

router.post("/productInCar", createProductInCarController);
router.post("/productInCar/:id/products", addProductsToCar);
router.get("/productInCar/", getProductInCarController);

module.exports = router;

