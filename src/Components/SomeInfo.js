import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import img from "../Assest/Images/ourVision.jpg";
import Testimonials from "./Testimonials";

function SomeInfo() {
  return (
    <div className="py-5">
      <Container>
        <Row className="bg-light">
          <Col
            md={12}
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={img} alt="test" className="w-75" />
          </Col>
          <Col md={12} lg={6} className="d-flex align-items-center p-5">
            <div className="text-center">
              <h4 className="text-success">Our Vision</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                blandit tellus sed velit sagittis eleifend. Maecenas convallis
                lobortis sagittis. Etiam et velit at odio elementum placerat
                condimentum aliquet mauris. Nullam nec eros dictum, ultricies
                turpis sit amet, tristique risus. Maecenas sed ex mattis,
                vestibulum dui et, ultrices metus. Suspendisse non erat euismod,
                accumsan ipsum sed, eleifend ligula. Suspendisse feugiat nulla
                ut molestie volutpat. Suspendisse pellentesque lobortis augue ac
                varius. Quisque vulputate scelerisque pretium. Quisque diam
                lorem, facilisis non odio quis, laoreet lobortis elit. Ut ut
                porttitor diam. Nunc viverra vulputate tortor ut porttitor.
                Nullam tincidunt orci at lorem commodo, nec commodo nisl
                malesuada tempor quis eu magna.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Testimonials />
        </Row>
      </Container>
    </div>
  );
}

export default SomeInfo;
