const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createProductValidator = [
  check("image", "Error en el campo de image")
    .exists().withMessage("el campo de image es obligatoria")
    .notEmpty().withMessage("image no deve de estar basido"),
  check("name", "Error con el campo de name")
    .exists().withMessage("El campo de name es obligatorio")
    .notEmpty().withMessage("El campo de name no deve ir basido")
    .isString().withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6, max: 30 }).withMessage("El name debe tener minimo 6 caracteres y máximo 30"),
  check("description", "Error en el campo de descripcion")
    .exists().withMessage("El campo de description es obligatorio")
    .notEmpty().withMessage("El campo de description no deve ir basido"),
  check("price", "error en el campo de price")
    .exists().withMessage("El price de description es obligatorio")
    .notEmpty().withMessage("El price de description no deve ir basido")
    .isFloat().withMessage("El price deve ser un número Real"),
  check("userId", "Error en el campo de userId")
    .exists().withMessage("El userId de description es obligatorio")
    .notEmpty().withMessage("El userId de description no deve ir basido")
    .isInt().withMessage("El userId deve ser un número entero"),
  validateResult
]

module.exports = { createProductValidator }