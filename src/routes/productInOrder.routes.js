const { Router } = require('express');
const { addProductsToOrder } = require('../controllers/productInOrder.controlles');

const router = Router();

router.post("/productInOrder/orders", addProductsToOrder);

module.exports = router;