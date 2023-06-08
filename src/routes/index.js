const userRoutes = require("./users.routes");
const productRoute = require("./products.routes");
const orderRoute = require('./orders.routes');
const productInCarRouter = require('./productInCar.routes');

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(productRoute);
  app.use(orderRoute);
  app.use(productInCarRouter);

  // TODO una ruta para las categorias
};

module.exports = apiRoutes;
