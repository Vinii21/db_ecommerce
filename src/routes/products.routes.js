const { Router } = require("express");
const { createProductController, updateDescriptionController } = require("../controllers/products.controlles");
const upload = require("../middlewares/multer.middleware");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/products", authenticate, upload, createProductController);
router.put("/products/:id", authenticate, updateDescriptionController);

module.exports = router;

