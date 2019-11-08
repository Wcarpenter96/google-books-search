const express = require("express");
const path = require("path");
const cors= require('cors');
const mongoose= require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
const bookRoutes = require("./routes/bookRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors());

// Use bookRoutes
app.use("/api", bookRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books");


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
