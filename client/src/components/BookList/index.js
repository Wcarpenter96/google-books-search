import React from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button";
import { Container, Row, Col } from "../Grid";

export function BookList({ children }) {
  return <ul className="list-group mt-5">{children}</ul>;
}

export function BookListItem(props) {
  // console.log(props.title)
  let bookmarkButton
  if (!props.bookmarked) {
    bookmarkButton = <Button
      onClick={() => {
        props.addBookmark(props.title,
          props.author, props.summary, props.thumbnail, props.url, props.id)
      }}
      type="light"
      className="input-lg mt-2">
      Bookmark this!
    </Button>
  } else {
    bookmarkButton = <Button
      onClick={() => {
        props.removeBookmark(props.id)
      }}
      type="danger"
      className="input-lg mt-2">
      Remove Bookmark
  </Button>
  }
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-6 sm-6">
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <p>
              {props.summary}
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.url}
            >
              View Book
            </a>
          </Col>
          <Col size="xs-4 sm-2">
            {bookmarkButton}
          </Col>
        </Row>
      </Container>
    </li>
  );
}
