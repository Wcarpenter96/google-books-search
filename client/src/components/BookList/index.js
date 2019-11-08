import React from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button";
import { Container, Row, Col } from "../Grid";

export function BookList({ children }) {
  return <ul className="list-group mt-5">{children}</ul>;
}

export function BookListItem(props) {
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
            <Button
              // onClick={this.handleFormSubmit}
              type="light"
              className="input-lg mt-2">
              Bookmark this!
              </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
