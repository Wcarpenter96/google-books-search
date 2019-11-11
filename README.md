# Google Books Search

a React-based [Google Books Search](https://developers.google.com/books) app

Website : https://google-books-search-weston.herokuapp.com/

---

On the homepage, type a keyword into the search bar and press the `Search` button to 
view a list of 10 Google Books that match your query. Each result displays information about the book, including title, author, book cover, and a brief description. If you wish to see more there 
is a `View Book` link to the book's page on Google Books. 

### Bookmarks

When viewing the book results, you can click the button `Bookmark this!` to add the book to your
_Bookmarks_. You can view your Bookmarks at any time by clicking on the `Bookmarks` link on the 
upper right hand side of the page. Click `Remove Bookmark` to remove the book from your Bookmarks.

### Download and Run

Once you have cloned the repository, make sure that you are in the correct directory and run the command 

```
npm  i
```
to install all node package dependencies. Once the installation is finished, run the command

```
npm  start
```
This will create two server instances- the client server will be hosted on Port 3000, 
and the express server will be hosted on Port 3001.


### Technologies

* `axios`
* `express`
* `mongoose`
* `react`
* [`react-router-dom`](https://github.com/reactjs/react-router)
