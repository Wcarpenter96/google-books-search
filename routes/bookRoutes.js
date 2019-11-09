const router = require("express").Router();
const booksController = require("../controllers/booksController");
const axios = require('axios');

// Matches with "/api/bookmarks"
router.route("/bookmarks/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/bookmarks/:id"
router.route("/bookmarks/:id")
  .get(booksController.find)
  .delete(booksController.remove);

router.get("/books/:query", (req, res) => {
  let query = `https://www.googleapis.com/books/v1/volumes?q=${req.params.query}&key=AIzaSyBy15gQ5M1367vhletYHK8RC1EX9IM8Vu0`
  console.log(query)
  console.log(req.params.query)
  axios
    .get(query).then(response => res.json(response.data))
    .catch(function (e) {
      console.log(e);
    });
})

module.exports = router;
