import express from "express";
// import {PORT} from '..config.js'
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
//
const api = express();
//
api.use(express.json());
//
// rutas
api.use("/api", employeesRoutes);
api.use("/api", indexRoutes);
api.use((req, res, next) => {
  res.status(404).json({
    message: "Direccion no existe",
  });
});

export default api;