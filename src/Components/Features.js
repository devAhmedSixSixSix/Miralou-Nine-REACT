import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FeaturesCard from "./FeaturesCard";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdSavings } from "react-icons/md";

function Features() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <FeaturesCard icon={<FaShippingFast size={44} />} />
          </Col>
          <Col>
            <FeaturesCard icon={<BiSupport size={44} />} />
          </Col>
          <Col>
            <FeaturesCard icon={<MdSavings size={44} />} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;
