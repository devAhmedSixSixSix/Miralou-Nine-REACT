import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function ShopingCartCard({ cart, removeItemFromCart }) {
  return (
    <div>
      {cart &&
        cart.map((ele, index) => (
          <Row key={index} className="py-3">
            <Col className="d-flex align-items-center border p-2 rounded">
              <img
                src={ele.image}
                alt="test"
                style={{
                  width: "200px",
                  height: "200px",
                }}
                className="me-3"
              />
              <div>
                <h5 className="d-inline">{ele.title}</h5>
                <h5>Price: {ele.price}$</h5>
                <h5>Quanity: {ele.quan}</h5>

                <Button
                  variant="danger"
                  onClick={() => removeItemFromCart(ele)}
                >
                  Remove From The Cart
                </Button>
              </div>
            </Col>
          </Row>
        ))}
    </div>
  );
}

export default ShopingCartCard;
