import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillGooglePlusCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
class Footer extends Component {
  render() {
    return (
      <Container className="mt-3">
        <Row className="bg-info text-center p-3">
          <Col className=" p-3 align-items-center " md="6">
            <div>
              <h5>Our Address</h5>
              <p>121, Clear Water Bay Road</p>
              <p>Clear Water Bay, Kowloon</p>
              <p>HONG KONG</p>
              <p>
                <AiOutlinePhone /> +852343433
              </p>
              <p>
                <AiOutlineMail /> staff@gmail.net
              </p>
            </div>
          </Col>
          <Col
            md="6"
            style={{ margin: "auto 0px" }}
            className="align-items-center"
          >
            <ul
              className="d-flex justify-content-center"
              style={{
                fontSize: "30px",
                listStyle: "none",
              }}
            >
              <li className="mr-4">
                <AiFillGooglePlusCircle />
              </li>
              <li className="mr-4">
                <AiFillFacebook />
              </li>
              <li className="mr-4">
                <AiFillLinkedin />
              </li>
              <li className="mr-4">
                <AiFillTwitterSquare />
              </li>
            </ul>
          </Col>
          <Col>@Copyright 2018 Ristorante Con Fusion</Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
