const express = require("express");
const {
  showAllNews,
  postAllNews,
  showDeleteNews,
  requestNewsId,
} = require("../controllers/newControllers");
const router = express.Router();

//* Routes
router.get("/news", showAllNews);
router.get("/news/:id", requestNewsId);
router.post("/news", postAllNews);
router.delete("/news/:id", showDeleteNews);

module.exports = router;
