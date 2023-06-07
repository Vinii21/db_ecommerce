const { Router } = require("express");
const { createProductController } = require("../controllers/products.controlles");
const upload = require("../middlewares/multer.middleware");

const router = Router();

router.post("/products", upload, createProductController);

module.exports = router;

