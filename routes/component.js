const express = require("express");
const router = express.Router();
const Component = require("../models/component");
const componentController = require("../Controllers/componentController");

router.get("/component", componentController.getComponent);

router.post("/createComponent", componentController.createComponent);

module.exports = router;
