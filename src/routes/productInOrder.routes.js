const { Router } = require('express');
const { addProductsToOrder } = require('../controllers/productInOrder.controlles');
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/productInOrder/orders", authenticate, addProductsToOrder);

module.exports = router;