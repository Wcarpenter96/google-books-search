import React, { Component } from "react";
import API from "./../../utils/API";
import Jumbotron from "./../../components/Jumbotron";
import { BookList, BookListItem } from "./../../components/BookList";
import { Container, Row, Col } from "./../../components/Grid";

class Bookmarks extends Component {

    state = {
        bookmarks: []
    }

    componentDidMount() {
        this.getBookmarks()
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

    removeBookmark = (id) => {
        API.deleteBookmark(id)
          .then(res => {
            console.log(id + ' removed')
            this.getBookmarks();
          })
          .catch(err => console.log(err));
      }

    renderBookmarkList = () => {
        let bookmarks = this.state.bookmarks
        if (bookmarks.length < 1) {
            return <div></div>
        } else {
            return (
                <div>
                    <BookList>
                        {bookmarks.map((bookmark, i) => {
                            return (
                                <BookListItem key={i}
                                    bookmarked={true}
                                    url={bookmark.url}
                                    summary={bookmark.description}
                                    thumbnail={bookmark.cover}
                                    title={bookmark.title}
                                    author={bookmark.author}
                                    removeBookmark={this.removeBookmark}
                                    id={bookmark.id}>
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
                            {this.renderBookmarkList()}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Bookmarks;
