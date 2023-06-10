const { Router } = require('express');
const {  addProductsToCar/* , getProductInCarController */, purchesProductInCarController } = require('../controllers/productInCar.controlles');
const { addToCarValidator } = require('../validators/cars.validators');


const router = Router();


router.post("/productInCar/products",addToCarValidator, addProductsToCar);
/* router.get("/productInCar/", getProductInCarController); */
router.get("/productInCar/clear", purchesProductInCarController);

module.exports = router;

