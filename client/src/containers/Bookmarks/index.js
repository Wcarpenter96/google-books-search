import React, { Component } from "react";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import API from "./../../utils/API";
import Jumbotron from "./../../components/Jumbotron";
import { BookList, BookListItem } from "./../../components/BookList";
import { Container, Row, Col } from "./../../components/Grid";

class Bookmarks extends Component {
    state = {
        books: [],
        bookSearch: ""
    };

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

    renderBookList = () => {
        console.log(this.state.books)
        if (this.state.books.length < 1) {
            return <div></div>
        } else {
            return (
                <div>
                    <BookList>
                        {this.state.books.map((book, i) => {
                            let thumbnail, author;
                            if (book.volumeInfo.imageLinks) {
                                thumbnail = book.volumeInfo.imageLinks.thumbnail;
                            } else {
                                thumbnail = 'http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg'
                            }
                            console.log(book.volumeInfo.authors)
                            if (book.volumeInfo.authors) {
                                author = book.volumeInfo.authors[0]
                            } else {
                                author = '';
                            }
                            return (
                                <BookListItem key={i}
                                    url={book.volumeInfo.previewLink}
                                    summary={book.volumeInfo.description}
                                    thumbnail={thumbnail}
                                    title={book.volumeInfo.title}
                                    author={author}>
                                </BookListItem>
                            )
                        })
                        }
                    </BookList>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Jumbotron header='Bookmarks' />
                <Container>
                    <Row>
                        <Col size="xs-12">
                            {/* {this.renderBookList()} */}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Bookmarks;
