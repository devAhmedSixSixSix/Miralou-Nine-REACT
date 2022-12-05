import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineHeart } from "react-icons/ai";

export default function ProductPageInfo({ alldata, addToCart, addToWishlist }) {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <h4>{alldata && alldata.title}</h4>
          <p>{alldata && alldata.price}$</p>
        </Row>

        <Row className="py-5">
          <Col>
            <p>{alldata && alldata.description}</p>
          </Col>
        </Row>
        <Row>
          <Button
            className="w-50"
            variant="success"
            onClick={() => addToCart(alldata)}
          >
            add to cart
          </Button>

          <Button
            className="w-25 ms-5"
            variant="warning"
            onClick={() => addToWishlist(alldata)}
          >
            <AiOutlineHeart size={22} className="text-white" />
          </Button>
        </Row>
      </Container>
    </div>
  );
}
