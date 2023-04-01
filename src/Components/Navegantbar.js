import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Navegantbar() {
  const fontSize = {
    fontSize: "22px",
    fontWeight: "lighter",
  };

  return (
    <Navbar bg="warning" sticky="top" expand="lg" className="text-white">
      <Container fluid>
        <Navbar.Brand className="text-white">Marco Nine</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-lg`}
              className="text-white"
            >
              Miralio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
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
            <div className="my-auto">
              <Link to="shopingcart">
                <AiOutlineShoppingCart size={32} className="me-3 text-white" />
              </Link>
              <Link to="wishlist">
                <AiOutlineHeart size={32} className="me-3 text-white" />
              </Link>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navegantbar;
