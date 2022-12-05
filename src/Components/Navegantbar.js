import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Navegantbar() {
  const fontSize = {
    fontSize: "22px",
    fontWeight: "lighter",
  };
  return (
    <>
      <Navbar bg="warning" sticky="top" expand="lg" className="text-white">
        <Container fluid>
          <Navbar.Brand>Marco</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="text-decoration-none text-white"
                as={Link}
                to="/"
                style={fontSize}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="text-decoration-none text-white"
                as={Link}
                to="shop"
                style={fontSize}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                className="text-decoration-none text-white"
                as={Link}
                to="aboutus"
                style={fontSize}
              >
                About us
              </Nav.Link>
              <Nav.Link
                className="text-decoration-none text-white"
                as={Link}
                to="contactus"
                style={fontSize}
              >
                Contact us
              </Nav.Link>
            </Nav>
            <div>
              <Link to="shopingcart">
                <AiOutlineShoppingCart size={32} className="me-3 text-white" />
              </Link>
              <Link to="wishlist">
                <AiOutlineHeart size={32} className="me-3 text-white" />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegantbar;
