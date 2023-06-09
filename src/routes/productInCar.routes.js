const { Router } = require('express');
const {  addProductsToCar/* , getProductInCarController */, purchesProductInCarController } = require('../controllers/productInCar.controlles');


const router = Router();


router.post("/productInCar/products", addProductsToCar);
/* router.get("/productInCar/", getProductInCarController); */
router.get("/productInCar/clear", purchesProductInCarController);

module.exports = router;

