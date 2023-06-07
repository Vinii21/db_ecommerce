const userRoutes = require("./users.routes");
const productRoute = require("./products.routes");

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(productRoute);
  // TODO una ruta para las categorias
};

module.exports = apiRoutes;
