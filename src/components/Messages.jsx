import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import { Row } from "react-bootstrap";
export default function Messages({ messages }) {
  return (
    <>
      <Row className="d-flex justify-content-between my-5 py-3">
        <h2>Latest Messages</h2>
      </Row>
      <Row s={1} sm={1} lg={3} className="g-3 mb-5 g-xl-4 g-xxl-5">
        {messages.map((message, i) => (
          <Message key={i} {...message} />
        ))}
      </Row>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
};
