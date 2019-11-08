const axios = require("axios");
const router = require("express").Router();

router.get("books/:query", (req, res) => {
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
