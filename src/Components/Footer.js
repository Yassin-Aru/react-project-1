import React from "react";
import {Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
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
  );
};

export default Footer;
