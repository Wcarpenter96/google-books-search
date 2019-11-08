import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get(`/api/books/${query}`);
  },
  // Gets all books
  getBookmarks: function() {
    return axios.get("/api/bookmarks");
  },
  // Deletes the book with the given id
  deleteBookmark: function(id) {
    return axios.delete("/api/bookmarks/" + id);
  },
  // Saves a book to the database
  saveBookmark: function(bookData) {
    return axios.post("/api/bookmarks", bookData);
  }
};
