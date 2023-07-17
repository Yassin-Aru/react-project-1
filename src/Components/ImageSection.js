import { Col, Container, Row } from "react-bootstrap";
import { AiFillCheckSquare } from "react-icons/ai";
import imgs2 from "../image.png";
import imgsToga from "../toga.png";
import React from "react";

const ImageSection = () => {
  return (
    <Container>
      <Row className="align-items-center mt-5 mb-5">
        <Col lg={6} className="mt-5">
            <img src={imgs2} className="w-100" />
        </Col>
        <Col lg={6} className="mt-5">
            <h1 className="w50 display-1 fw-semibold">
            Fresh Vegetables Every Day
            </h1>
            <p className="fs-4">
            Healthy life as informed declared we enjoy the margaret. Joy
            horrible moreover man feelings own shy. Request norland neither
            mistake for yet. Between the for morning assured country
            believe.{" "}
            </p>
            <button className="btn btn-lg text-light order-btn rounded-5">
            Learn More
            </button>
        </Col>
        </Row>
        <Row className="align-items-center mt-5">
        <Col lg={6} className="mt-5 order-1 order-lg-0">
            <h1 className="w50 display-1 fw-semibold">
            Cooked by the Best Chefs
            </h1>
            <p className="fs-4">
            Believing neglected so so allowance existence departure in. In
            design active temper be uneasy. Thirty for remove plenty regard
            you summer though. He preference connection astonished on of ye.
            </p>
            <ul className="mt-4">
            <li className="mt-2">
                <AiFillCheckSquare className="text-success fs-4 me-3" />A
                guaranteed delicious meal
            </li>
            <li className="mt-2">
                <AiFillCheckSquare className="text-success fs-4 me-3" />
                Food is guaranteed hygienic
            </li>
            <li className="mt-2">
                <AiFillCheckSquare className="text-success fs-4 me-3" />
                Cooked quickly
            </li>
            </ul>
        </Col>
        <Col lg={6} className="mt-5">
            <img src={imgsToga} className="w-100" />
        </Col>
        </Row>
    </Container>
  );
};

export default ImageSection;
