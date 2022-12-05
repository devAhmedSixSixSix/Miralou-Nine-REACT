import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";

function Footers() {
  const bg = {
    background: "#252525",
  };
  return (
    <div style={bg} className="text-white py-5">
      <Container>
        <Row>
          <Col sm={12} lg={3} className="text-center mb-3">
            <h2>Miralou</h2>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
            <div>
              <TiSocialFacebook size={44} />
              <TiSocialPinterest size={44} />
              <TiSocialTwitter size={44} />
            </div>
          </Col>
          <Col sm={12} lg={3}>
            <ul className="list-unstyled text-center">
              <h4 className="text-danger">HeadLine</h4>
              <li>One</li>
              <li>One</li>
              <li>One</li>
            </ul>
          </Col>
          <Col sm={12} lg={3}>
            <ul className="list-unstyled text-center">
              <h4 className="text-danger">HeadLine</h4>
              <li>One</li>
              <li>One</li>
              <li>One</li>
            </ul>
          </Col>
          <Col sm={12} lg={3}>
            <ul className="list-unstyled text-center">
              <h4 className="text-danger">HeadLine</h4>
              <li>One</li>
              <li>One</li>
              <li>One</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footers;
