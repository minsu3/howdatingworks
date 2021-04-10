import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import brand from "../images/brand.svg";

const Header = () => {
  return (
    <div style={{ borderBottom: "2px solid #ddd" }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        style={{ backgroundColor: "white" }}
      >
        <Navbar.Brand href="/">
          <img
            src={brand}
            alt=""
            style={{ width: "200px", marginLeft: "5vw" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link
              href="/about"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
                color: "black",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
                color: "black",
              }}
            >
              Dating Bootcamp
            </Nav.Link>
            <Nav.Link
              href="/coaching"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
                color: "black",
              }}
            >
              Coaching Session
            </Nav.Link>
            <Nav.Link
              href="/blog"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
                color: "black",
              }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="/sign-in"
              className="mr-sm-2"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
                color: "black",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
