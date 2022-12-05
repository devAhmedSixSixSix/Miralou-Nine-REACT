import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { SiNike, SiGutenberg, SiTransportforireland } from "react-icons/si";
import { GiLoincloth } from "react-icons/gi";

function OurPartners() {
  return (
    <div>
      <Container>
        <Row className="text-center py-5">
          <Col>
            <SiNike size={64} />
          </Col>
          <Col>
            <GiLoincloth size={64} />
          </Col>
          <Col>
            <SiGutenberg size={64} />
          </Col>
          <Col>
            <SiTransportforireland size={64} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurPartners;
