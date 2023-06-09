const { Router } = require("express");
const { getOrdersByUserController, createOrderController, completedOrder } = require("../controllers/orders.controllers");

const router = Router()

router.get('/orders/:userId', getOrdersByUserController);
router.post('/orders', createOrderController);
router.put("/orders/:id", completedOrder);

module.exports = router