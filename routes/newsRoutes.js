const express = require("express");
const {
  showAllNews,
  postAllNews,
  showDeleteNews,
} = require("../controllers/newControllers");
const router = express.Router();

//* Routes
router.get("/news", showAllNews);
router.post("/news", postAllNews);
router.delete("/news/:id", showDeleteNews);

module.exports = router;
