import imgs from "../assets/Header Image.png";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";

const HeroSection = () => {
  return (
    <Container>
      <Row className="align-items-center mt-5 mb-5">
        <Col lg={6} className="mb-5 order-1 order-lg-0">
          <h1 className="w50 display-1 fwsemibold">
            Just <b className="color">Eat healthy</b> food to live a
            healthier life
          </h1>
          <p className="fs-4">
            Enjoy a healthy life by eating healthy foods that have extraordinary
            flavors that make your life healthier for today and in the future
          </p>
          <button className="btn btn-lg text-light order-btn rounded-5">
            Order Now
          </button>
        </Col>
        <Col lg={6} className="mb-5">
          <img src={imgs} className="w-100" alt="Hero" />
        </Col>{" "}
      </Row>
    </Container>
  );
};

export default HeroSection;
