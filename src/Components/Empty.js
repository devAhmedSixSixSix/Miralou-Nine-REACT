import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function Empty({ title }) {
  return (
    <div className="p-5 m-5 text-center">
      <h2 className="mb-4">{title} is empty</h2>
      <Link to="/shop">
        <Button variant="success">Shop Now</Button>
      </Link>
    </div>
  );
}

export default Empty;
