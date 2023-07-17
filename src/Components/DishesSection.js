import Dishes1 from "../Dishes1.png";
import Dishes2 from "../Dishes2.png";
import Dishes3 from "../Dishes3.png";
import { Col, Row } from "react-bootstrap";

import React from "react";

const DishesSection = () => {
  return (
    <div className="text-center" id="Dishes">
      <h1>Special Dishes for you</h1>
      <p>Made with premium & 100% Organic ingredients</p>

      {/* Dishes Row */}
      <Row>
        {/* Dishes 1 */}
        <Col md="6" lg="4" className="p-5">
          <div className="border py-5 px-3 rounded-4">
            <img src={Dishes1} className="w-75" alt="Dish 1" />
            <h3 className="mt-5">Green Salad</h3>
            <p className="mt-3 text-secondary">
              A salad combined witha delicious cut of bacon and mixed with tasty
              and fresh sesome oil.
            </p>
          </div>
        </Col>

        {/* Dishes 2 */}
        <Col md="6" lg="4" className="p-5">
          <div className="border py-5 px-3 rounded-4">
            <img src={Dishes2} className="w-75" alt="Dish 2" />
            <h3 className="mt-5">Beef Salad</h3>
            <p className="mt-3 text-secondary">
              A salad combined witha delicious cut of bacon and mixed with tasty
              and fresh sesome oil.
            </p>
          </div>
        </Col>

        {/* Dishes 3 */}
        <Col md="6" lg="4" className="p-5">
          <div className="border py-5 px-3 rounded-4">
            <img src={Dishes3} className="w-75" alt="Dish 3" />
            <h3 className="mt-5">Nut Salad</h3>
            <p className="mt-3 text-secondary">
              A salad combined witha delicious cut of bacon and mixed with tasty
              and fresh sesome oil.
            </p>
          </div>
        </Col>
      </Row>

      <button className="btn order-btn text-light rounded-5 px-4 fs-5">
        View All
      </button>
    </div>
  );
};

export default DishesSection;
