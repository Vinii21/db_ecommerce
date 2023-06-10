const { Router } = require("express");
const { createProductController, updateDescriptionController } = require("../controllers/products.controlles");
const upload = require("../middlewares/multer.middleware");
const { createProductValidator } = require("../validators/products.validators");

const router = Router();

router.post("/products", createProductValidator, upload, createProductController);
router.put("/products", updateDescriptionController);

module.exports = router;

