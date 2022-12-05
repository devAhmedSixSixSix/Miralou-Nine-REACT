import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import OurTeamCard from "./OurTeamCard";
import Testimonials from "./Testimonials";
import avatar1 from "../Assest/Images/avatar-01.png";
import avatar2 from "../Assest/Images/avatar-02.png";
import avatar3 from "../Assest/Images/avatar-03.png";
import avatar4 from "../Assest/Images/avatar-04.png";

function OurTeam() {
  return (
    <div>
      <Container>
        <Row className="mb-5">
          <h2 className="text-success fw-light">Our Team</h2>
          <p className="text-muted">Loriem Ipsum Dollar...</p>
        </Row>
        <Row>
          <Col className="mb-3">
            <OurTeamCard img={avatar1} />
          </Col>
          <Col className="mb-3">
            <OurTeamCard img={avatar2} />
          </Col>
          <Col className="mb-3">
            <OurTeamCard img={avatar3} />
          </Col>
          <Col className="mb-3">
            <OurTeamCard img={avatar4} />
          </Col>
        </Row>
        <Row>
          <Testimonials />
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;
