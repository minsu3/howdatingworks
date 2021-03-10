import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "rgb(6, 0, 65)" }}
      >
        <Navbar.Brand href="#home" style={{ fontSize: "28px" }}>
          HDW
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="pull-right">
            <Nav.Link
              href="/about"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/coaching"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Coaching
            </Nav.Link>
            <Nav.Link
              href="/blog"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
