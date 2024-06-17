const express = require("express");
const {
  showAllNews,
  postAllNews,
  showDeleteNews,
  requestNewsId,
  categoriesAll,
  sendCategoriesAll,
  receiveCategoriesAll,
  excludeCategories,
} = require("../controllers/newControllers");
const router = express.Router();

//* Routes
router.get("/news", showAllNews);
router.get("/news/:id", requestNewsId);
router.get("/categorias", receiveCategoriesAll);

router.post("/news", postAllNews);
router.post("/categorias", sendCategoriesAll);

router.delete("/news/:id", showDeleteNews);
router.delete("/categorias/:id", excludeCategories);

module.exports = router;
