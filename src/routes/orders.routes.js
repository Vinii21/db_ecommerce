const { Router } = require("express");
const { getOrdersByUserController, createOrderController } = require("../controllers/orders.controllers");

const router = Router()

router.get('/orders/:userId', getOrdersByUserController);
router.post('/orders', createOrderController);

module.exports = router