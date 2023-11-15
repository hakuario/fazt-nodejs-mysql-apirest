import { Router } from "express";
import {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.controllers.js'

const router = Router();
// rutas
router.get("/employes", getEmployees);
router.get("/employes/:id", getEmployee);
router.post("/employes", createEmployee);
router.patch("/employes/:id", updateEmployee);
router.delete("/employes/:id", deleteEmployee);
//
export default router;
