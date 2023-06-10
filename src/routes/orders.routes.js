const { Router } = require("express");
const { createOrderController, completedOrder } = require("../controllers/orders.controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router()

router.post('/orders', authenticate, createOrderController);
router.put("/orders/:id", authenticate, completedOrder);

module.exports = router;