import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import BannerImage from "../Assest/Images/Banner.jpg";

function Hero() {
  const bgImg = {
    backgroundImage: `url(${BannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "90vh",
    position: "relative",
  };

  const overlay = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    zIndex: "2",
  };

  const routate = {
    rotate: "-2deg",
    width: "fit-content",
  };

  const routateTwo = {
    rotate: "2deg",
    width: "fit-content",
  };

  return (
    <div style={bgImg}>
      <div style={overlay} className="d-flex align-items-center ">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div>
                <h2
                  className="bg-warning text-white fw-lighter p-1"
                  style={routate}
                >
                  20% Discount
                </h2>
                <h2
                  style={routateTwo}
                  className="bg-warning text-white fw-lighter p-1"
                >
                  Choose whatever suits you
                </h2>
                <Link to="/shop">
                  <Button
                    variant="success"
                    className="px-5 py-2 d-block m-auto mt-5"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
