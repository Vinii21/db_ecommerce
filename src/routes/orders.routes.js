const { Router } = require("express");
const { getOrdersByUserController } = require("../controllers/orders.controllers");

const router = Router()

router.get('/orders/:id', getOrdersByUserController);

module.exports = router