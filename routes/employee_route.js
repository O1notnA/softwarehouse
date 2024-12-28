const express = require('express');
const router = express.Router();
const employeeController = require("../controllers/employee_controller")
const authMiddleware = require("../middleware/middleware")

router.get("/",authMiddleware, employeeController.findAllEmployees);
router.post("/",authMiddleware, employeeController.createEmployee);
router.put("/:id",authMiddleware, employeeController.updateEmployee);
router.delete("/:id",authMiddleware, employeeController.deleteEmployee);

module.exports = router;