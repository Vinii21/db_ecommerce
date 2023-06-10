const { Router } = require("express");
const { createOrderController, completedOrder } = require("../controllers/orders.controllers");

const router = Router()

router.post('/orders', createOrderController);
router.put("/orders/:id", completedOrder);

module.exports = router