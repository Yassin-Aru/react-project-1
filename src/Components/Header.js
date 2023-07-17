// Header.js
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import logo from "../UI.desk.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header>
      <div className="container-f mx-auto py-4 navbar">
        <img src={logo} alt="Logo" />

        {/* Desktop navigation */}
        <ul className={`ul-header m-0 d-none d-md-flex ${isMenuOpen ? "d-flex" : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Testimonials</li>
        </ul>

        {/* Mobile navigation */}
        <div className={`d-md-none d-flex align-items-center ${isMenuOpen ? "gap-3" : ""}`}>
          {!isMenuOpen && (
            <button className="btn border-0" onClick={handleMenuToggle}>
              <AiOutlineMenu className="fs-2" />
            </button>
          )}
          {isMenuOpen && (
            <button className="btn border-0" onClick={handleMenuToggle}>
              <GrClose className="fs-2" />
            </button>
          )}
        </div>

        {/* Buttons */}
        <div className={`d-flex align-items-center gap-3 ${isMenuOpen ? "d-md-none" : "d-none"}`}>
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

      {/* Mobile navigation menu */}
      <div
        id="showDiv"
        className={`p-5 shadow ${isMenuOpen ? "" : "d-none"}`}
      >
        <ul className="m-0 AAAA">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;