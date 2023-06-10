const { Router } = require("express");
const { createProductController, updateDescriptionController } = require("../controllers/products.controlles");
const upload = require("../middlewares/multer.middleware");

const authenticate = require("../middlewares/auth.middleware");
const { createProductValidator } = require("../validators/products.validators");

const router = Router();

router.post("/products", authenticate, createProductValidator, upload, createProductController);
router.put("/products", authenticate, updateDescriptionController);

module.exports = router;

