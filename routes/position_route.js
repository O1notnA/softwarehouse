const express = require('express');
const router = express.Router();
const {Position} = require("../models");
const { where } = require('sequelize');
const positionController = require("../controllers/position_controller");

router.get("/", positionController.findAllPositions);

router.post("/", positionController.createPosition);

router.put("/:id", positionController.updatePosition)

router.delete("/:id", positionController.deletePosition)

module.exports = router;