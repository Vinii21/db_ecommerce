const { Router } = require('express');
const { addProductsToOrder } = require('../controllers/productInOrder.controlles');
const { addOrderDetailtValidator } = require('../validators/orders.validators');

const router = Router();

router.post("/productInOrder/orders", addOrderDetailtValidator, addProductsToOrder);

module.exports = router;