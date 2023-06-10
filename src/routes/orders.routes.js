const { Router } = require("express");
const { getOrdersByUserController, createOrderController, completedOrder } = require("../controllers/orders.controllers");
const { createOrderValidator, completedOrderValidator } = require("../validators/orders.validators");

const router = Router()

router.get('/orders/:userId', getOrdersByUserController);
router.post('/orders', createOrderValidator, createOrderController);
router.put("/orders/:id", completedOrderValidator, completedOrder);

module.exports = router