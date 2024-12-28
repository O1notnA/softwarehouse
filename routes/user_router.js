const express = require('express');
const router = express.Router();
const userController = require("../controllers/user_controller");
const authMiddleware = require("./middleware/middleware");

router.post("/login",authMiddleware, userController.login_user);
router.post("/createUser",authMiddleware, userController.createUser);

module.exports = router;