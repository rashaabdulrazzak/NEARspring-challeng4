import React from "react";
import { Col, Card } from "react-bootstrap";

import "./Message.css";
import pro from "../img/crown.png";
export default function Message({ text, premium, sender, time }) {
  return (
    <>
      <Col size={3}>
        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              From {sender}{" "}
              {premium ? (
                <span>
                  {" "}
                  <img src={pro} style={{ height: "40px" }} />
                </span>
              ) : (
                <></>
              )}
            </Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Subtitle>
              {" "}
              Date: {new Date(parseInt(time) / 1000000).toString()}
              <br />
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
