import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import Empty from "../Components/Empty";
import ShopingCartCard from "../Components/ShopingCartCard";
import SummreyCard from "../Components/SummreyCard";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ShopingCart({ cart, removeItemFromCart }) {
  return (
    <div className="py-5 my-5">
      <Container>
        {cart.length > 0 ? (
          <div>
            <Row className="py-5">
              <Col>
                <h4>Shopping Cart</h4>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={6}>
                <ShopingCartCard
                  cart={cart}
                  removeItemFromCart={removeItemFromCart}
                />
              </Col>
              <Col>
                <SummreyCard cart={cart} />
                <div>
                  <Link to="closecheckout">
                    <Button variant="success my-3" className="w-100">
                      Proceed To Check Out
                    </Button>
                  </Link>
                </div>
                <Link
                  to="../shop"
                  className=" text-decoration-none text-success"
                >
                  <AiOutlineArrowLeft size={33} />
                  <span>Continue Shopping</span>
                </Link>
              </Col>
            </Row>
          </div>
        ) : (
          <Empty title="Cart" />
        )}
      </Container>
    </div>
  );
}

export default ShopingCart;
