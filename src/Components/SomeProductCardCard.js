import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

function SomeProductCardCard({ data }) {
  return (
    <Row>
      {data &&
        data.map((ele, index) => (
          <Col key={index} sm={12} lg={3}>
            <div className="text-center m-2">
              <div className="bg-light p-3 rounded">
                <img src={ele.image} alt="test" width={200} height={200} />
              </div>
              <p className="text-muted">{ele.category}</p>
              <h6>
                {ele.title.length > 20
                  ? ele.title.slice(0, 20) + "..."
                  : ele.title}
              </h6>
              <p className="text-muted">{ele.price}$</p>
              <Link to={`/productpage/${ele.id}`}>
                <Button variant="success" className="w-100">
                  Veiw Product
                </Button>
              </Link>
            </div>
          </Col>
        ))}
    </Row>
  );
}

export default SomeProductCardCard;
