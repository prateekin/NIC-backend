const express = require("express");
const router = express.Router();
const navbarController = require("../Controllers/navbarController");

// Get all the navbar links
router.get("/getAllNavbars", navbarController.getAllNavbars);

// Create the navbar navlinks ans subnavlinks
router.post("/createNavbar", navbarController.createNavbar);

// Edit the navbar navlinks and subnavlinks
router.put("/editNavbar/:id", navbarController.updateNavbar);

// Delete the navbar navlink
router.delete("/deleteNavlink/:id", navbarController.deleteNavbar);

module.exports = router;
