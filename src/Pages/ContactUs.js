import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import HeaderBanner from "../Components/HeaderBanner";
import img from "../Assest/Images/contactUs.jpg";

function ContactUs() {
  return (
    <div className="bg-light pb-5">
      <HeaderBanner title="Contact Us" img={img} />

      <Container className="pt-5">
        <Row>
          <Col md className="d-flex align-items-center">
            <div className="text-center">
              <h4 className="text-success">Get in touch</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                blandit tellus sed velit sagittis eleifend. Maecenas convallis
                lobortis sagittis. Etiam et velit at odio elementum placerat
                condimentum aliquet mauris. Nullam nec eros dictum, ultricies
                turpis sit amet, tristique risus. Maecenas sed ex mattis,
                vestibulum dui et, ultrices metus. Suspendisse non erat euismod,
                accumsan ipsum sed, eleifend ligula. Suspendisse feugiat nulla
                ut molestie volutpat. Suspendisse pellentesque lobortis augue ac
                varius. Quisque vulputate scelerisque pretium.
              </p>
            </div>
          </Col>
          <Col md>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" className="w-100" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
