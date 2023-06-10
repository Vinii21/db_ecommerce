const { Router } = require("express");

const { createOrderController, completedOrder } = require("../controllers/orders.controllers");
const { createOrderValidator, completedOrderValidator } = require("../validators/orders.validators");
const router = Router()

router.post('/orders', createOrderValidator, createOrderController);
router.put("/orders/:id", completedOrderValidator, completedOrder);


module.exports = router