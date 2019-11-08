import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function BookList ({ children }) {
  return <ul className="list-group mt-5">{children}</ul>;
}

export function BookListItem (props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p>
              {props.summary}
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.url}
            >
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
