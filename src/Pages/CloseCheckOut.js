import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CloseCheckOutForm from "../Components/CloseCheckOutForm";
import SummreyCard from "../Components/SummreyCard";

function CloseCheckOut({ cart }) {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col sm={12} lg={6} className="pb-3">
            <CloseCheckOutForm />
          </Col>
          <Col sm={12} lg={6}>
            <SummreyCard cart={cart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CloseCheckOut;
