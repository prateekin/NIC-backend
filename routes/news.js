const express = require("express");
const router = express.Router();
const newsController = require("../Controllers/newsController");

// Get all the news
router.get("/news", newsController.getNews);

// Create a news
router.post("/createNews", newsController.createNews);

// Edit an existing news
router.put("/editNews/:id", newsController.editNews);

// Delete an existing news
router.delete("/deleteNews/:id", newsController.deleteNews);

module.exports = router;
