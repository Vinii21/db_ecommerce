const { Router } = require('express');
const {  addProductsToCar } = require('../controllers/productInCar.controlles');
const authenticate = require("../middlewares/auth.middleware");

const router = Router();


router.post("/productInCar/products", authenticate, addProductsToCar);

module.exports = router;

