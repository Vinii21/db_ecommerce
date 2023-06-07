// Router de express
const { Router } = require("express");
const {
  createUser,
  login,
  validateEmail,
  updateUserController,
} = require("../controllers/users.controlles");
const {
  createUserValidator,
  loginUserValidator,
} = require("../validators/user.validators");
const upload = require("../middlewares/multer.middleware");


const router = Router();

router.post("/users", createUserValidator, createUser);

router.post("/users/login", loginUserValidator, login);

router.post("/users/email-validate", validateEmail);

router.put("/users/:id", upload, updateUserController )

module.exports = router;
