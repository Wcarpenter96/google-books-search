const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/bookmarks"
router.route("/booksmarks/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/bookmarks/:id"
router
  .route("/bookmarks/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
