import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./UI.desk.png";
import imgs from "./Header Image.png";
import imgs2 from "./image.png";
import imgsToga from "./toga.png";
import Dishes1 from "./Dishes1.png";
import Dishes2 from "./Dishes2.png";
import Dishes3 from "./Dishes3.png";
import "./App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { AiFillCheckSquare } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const ShowDiv = () => {
    const showDiv = document.querySelector("#showDiv");
    const AiOutlineMenu = document.querySelector("#AiOutlineMenu");
    const GrClose = document.querySelector("#GrClose");
    showDiv.classList.remove("d-none");
    AiOutlineMenu.classList.add("d-none");
    GrClose.classList.remove("d-none");
  };
  const hideDiv = () => {
    const showDiv = document.querySelector("#showDiv");
    const AiOutlineMenu = document.querySelector("#AiOutlineMenu");
    const GrClose = document.querySelector("#GrClose");
    showDiv.classList.add("d-none");
    AiOutlineMenu.classList.remove("d-none");
    GrClose.classList.add("d-none");
  };
  return (
    <div className="App">
      <div id="showDiv" className="p-5 shadow d-none">
        {" "}
        <ul className="m-0 AAAA">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <header className="d-none d-md-block">
        <div className="container-f mx-auto py-4 navbar">
          <img src={logo} />

          <ul className="ul-header m-0">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonials</li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center">
              <button className="btn border-0">
                <SlBasket />
              </button>
              <button className="btn border-0">
                <AiOutlineSearch />
              </button>
            </div>
            <button className="btn btn-dark rounded-5 px-4">Order Now</button>
          </div>
        </div>
      </header>
      <header className="d-md-none d-block">
        <div className="container-f mx-auto py-4 navbar">
          <img src={logo} />
          <div>
            <button
              className="btn border-0"
              id="AiOutlineMenu"
              onClick={() => {
                ShowDiv();
              }}
            >
              <AiOutlineMenu className="fs-2" />
            </button>
            <button
              className="btn border-0 d-none"
              id="GrClose"
              onClick={() => {
                hideDiv();
              }}
            >
              <GrClose className="fs-2" />
            </button>
          </div>
        </div>
      </header>

      <section>
        <Container>
          <Row className="align-items-center mt-5 mb-5">
            <Col lg={6} className="mb-5 order-1 order-lg-0">
              <h1 className="w50 display-1 fwsemibold">
                Just <b className="color">Eat healthy</b> food to live a
                healthier life
              </h1>
              <p className="fs-4">
                Enjoy a healthy life by eating healthy foods that have
                extraordinary flavors that make your life healthier for today
                and in the future
              </p>
              <button className="btn btn-lg text-light order-btn rounded-5">
                Order Now
              </button>
            </Col>
            <Col lg={6} className="mb-5">
              <img src={imgs} className="w-100" />
            </Col>{" "}
          </Row>
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

          <div className="text-center" id="Dishes">
            <h1>Special Dishes for you</h1>
            <p>Made with premium & 100% Organic ingredients</p>

            <Row>
              <Col md="6" lg="4" className="p-5">
                <div className="border py-5 px-3 rounded-4">
                  <img src={Dishes1} className="w-75" />

                  <h3 className="mt-5">Green Salad</h3>
                  <p className="mt-3 text-secondary">
                    A salad combined witha delicious cut of bacon and mixed with
                    tasty and fresh sesome oil.
                  </p>
                </div>
              </Col>
              <Col md="6" lg="4" className="p-5">
                <div className="border py-5 px-3 rounded-4">
                  <img src={Dishes2} className="w-75" />

                  <h3 className="mt-5">Beef Salad</h3>
                  <p className="mt-3 text-secondary">
                    A salad combined witha delicious cut of bacon and mixed with
                    tasty and fresh sesome oil.{" "}
                  </p>
                </div>
              </Col>
              <Col md="6" lg="4" className="p-5">
                <div className="border py-5 px-3 rounded-4">
                  <img src={Dishes3} className="w-75" />

                  <h3 className="mt-5">Nut Salad</h3>
                  <p className="mt-3 text-secondary">
                    A salad combined witha delicious cut of bacon and mixed with
                    tasty and fresh sesome oil.{" "}
                  </p>
                </div>{" "}
              </Col>
            </Row>
            <button className="btn order-btn text-light rounded-5 px-4 fs-5">
              View All
            </button>
          </div>

          <div id="Subscribe" className="text-center">
            <h1>Subscribe to the Newsletter</h1>
            <p className="fs text-secondary fs-3">
              Enter your email below to get our daily offers and news
            </p>
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <input
                type="email"
                className="border px-3 py-2 rounded-4"
                placeholder="Enter your email."
              />
              <button className="btn order-btn text-light px-4 rounded-5">
                Get Started
              </button>
            </div>
          </div>

          <footer>
            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
              <ul className="w-20">
                <li className="hover fs-6 mt-2 fw-bold">UI.desk</li>
                <li className="hover fs-6 mt-2 text-secondary w-75">
                  On formed merits hunted unable merely by mr whence or.{" "}
                </li>
              </ul>

              <ul className="w-20">
                <li className="hover fs-6 mt-2 fw-bold">Home</li>
                <li className="hover fs-6 mt-2 text-secondary">Company</li>
                <li className="hover fs-6 mt-2 text-secondary">News</li>
                <li className="hover fs-6 mt-2 text-secondary">Team</li>
              </ul>

              <ul className="w-20">
                <li className="hover fs-6 mt-2 fw-bold">About</li>
                <li className="hover fs-6 mt-2 text-secondary">History</li>
                <li className="hover fs-6 mt-2 text-secondary"> Service</li>
                <li className="hover fs-6 mt-2 text-secondary">Pricing</li>
              </ul>

              <ul className="w-20">
                <li className="hover fs-6 mt-2 fw-bold">Partner</li>
                <li className="hover fs-6 mt-2 text-secondary">Business</li>
                <li className="hover fs-6 mt-2 text-secondary">Plan</li>
                <li className="hover fs-6 mt-2 text-secondary">Marketing</li>
              </ul>

              <ul>
                <li className="hover fs-6 mt-2 fw-bold">Contact</li>
                <li className="hover fs-6 mt-2 text-secondary">UI.desk</li>
                <li className="hover fs-6 mt-2 text-secondary">
                  (465)954-8487
                </li>
                <li className="hover fs-6 mt-2 text-secondary">
                  Lahore, Pakistan
                </li>
              </ul>
            </div>
          </footer>
        </Container>
        <div className="order-btn text-center text-light py-3">
          © Copyright 2020 by ui.desk. All right reserved.
        </div>
      </section>
    </div>
  );
}
export default App;
