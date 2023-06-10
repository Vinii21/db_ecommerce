const { Router } = require("express");
const { createProductController, updateDescriptionController, getProductUserMayorController } = require("../controllers/products.controlles");
const upload = require("../middlewares/multer.middleware");
const { createProductValidator, updateDescriptionValidator } = require("../validators/products.validators");

const router = Router();

router.post("/products", upload, createProductController);
router.put("/products", updateDescriptionValidator, updateDescriptionController);
router.get("/products", getProductUserMayorController);

module.exports = router;

