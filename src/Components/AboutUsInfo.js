import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../Assest/Images/whoWeAre.jpg";

function AboutUsInfo() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row>
          <Col sm={12} lg={6} className="d-flex align-items-center text-center">
            <div>
              <h2 className=" text-success fw-lighter">WE ARE MIRALOU</h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                blandit tellus sed velit sagittis eleifend. Maecenas convallis
                lobortis sagittis. Etiam et velit at odio elementum placerat
                condimentum aliquet mauris. Nullam nec eros dictum, ultricies
                turpis sit amet, tristique risus. Maecenas sed ex mattis,
                vestibulum dui et, ultrices metus.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <img src={img} alt="test" className="w-100 h-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUsInfo;
