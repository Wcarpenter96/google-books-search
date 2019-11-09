import React, { Component } from "react";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import API from "./../../utils/API";
import Jumbotron from "./../../components/Jumbotron";
import { BookList, BookListItem } from "./../../components/BookList";
import { Container, Row, Col } from "./../../components/Grid";

class Home extends Component {
  state = {
    books: [],
    bookSearch: "",
    bookmarks: []
  };

  componentDidMount() {
    this.getBookmarks();
  }

  getBookmarks = () => {
    API.getBookmarks()
      .then(res => {
        this.setState({
          bookmarks: res.data
        })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        this.setState({ books: res.data.items });
      })
      .catch(err => console.log(err));
  };

  renderBooks = () => {
    if (this.state.books.length < 1) {
      return <h1></h1>
    } else {
      return (
        <BookList>
          {
            this.state.books.map((book, i) => {
              let bookmarked, thumbnail, author;
              bookmarked = false;
              for (let j = 0; j < this.state.bookmarks.length; j++) {
                if (this.state.bookmarks[j].id === book.id) {
                  bookmarked = true;
                }
              }
              if (book.volumeInfo.imageLinks) {
                thumbnail = book.volumeInfo.imageLinks.thumbnail;
              } else {
                thumbnail = 'http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg'
              }
              if (book.volumeInfo.authors) {
                author = book.volumeInfo.authors[0]
              } else {
                author = '';
              }
              return (
                <BookListItem key={i}
                  bookmarked={bookmarked}
                  url={book.volumeInfo.previewLink}
                  summary={book.volumeInfo.description}
                  thumbnail={thumbnail}
                  title={book.volumeInfo.title}
                  author={author}
                  id={book.id}
                  addBookmark={this.addBookmark}
                  removeBookmark={this.removeBookmark}>
                </BookListItem>
              )
            })
          }
        </BookList>
      )
    }
  }



  addBookmark = (title, author, description, cover, url, id) => {
    API.saveBookmark({
      title: title,
      author: author,
      description: description,
      cover: cover,
      url: url,
      id: id
    }).then(res => {
      console.log('Bookmarked!')
      this.getBookmarks();
    })
      .catch(err => console.log(err));
  }

  removeBookmark = (id) => {
    API.deleteBookmark(id)
      .then(res => {
        console.log(id + ' removed')
        this.getBookmarks();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron header='Google Book Search' />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {this.renderBooks()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Home;
