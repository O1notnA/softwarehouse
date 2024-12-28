const express = require('express');
const router = express.Router();
const employeeController = require("../controllers/employee_controller")

router.get("/", employeeController.findAllEmployees)

router.post("/", employeeController.createEmployee)

router.put("/:id", employeeController.updateEmployee)

router.delete("/:id", employeeController.deleteEmployee)

module.exports = router;