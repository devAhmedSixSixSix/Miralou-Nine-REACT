import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

function CloseCheckOutForm() {
  return (
    <div>
      <Form>
        <div className="d-flex">
          <Form.Group className="mb-3 w-50 me-2" controlId="formBasicPassword">
            <Form.Label>Frist Name</Form.Label>
            <Form.Control type="text" placeholder="Frist Name" />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <div className="d-flex">
          <Form.Group className="mb-3 w-25 me-2" controlId="formBasicPassword">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Company Name" />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>
        <div className="d-flex">
          <Form.Group className="mb-3 w-25 me-2" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group className="mb-3 w-50 me-2">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group className="mb-3 w-25">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" />
          </Form.Group>
        </div>

        <Button variant="success" className="w-100" type="submit">
          PAY
        </Button>
      </Form>
    </div>
  );
}

export default CloseCheckOutForm;
