const { Router } = require("express");
const { createProductController, updateDescriptionController } = require("../controllers/products.controlles");
const upload = require("../middlewares/multer.middleware");

const router = Router();

router.post("/products", upload, createProductController);
router.put("/products", updateDescriptionController);

module.exports = router;

