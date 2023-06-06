const userRoutes = require("./users.routes");

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  // TODO una ruta para las categorias
};

module.exports = apiRoutes;
