import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CategoriesCard from "./CategoriesCard";
import mensImg from "../Assest/Images/mens-categorys.jpg";
import womensImg from "../Assest/Images/womens-categorys.jpg";
import kidsImg from "../Assest/Images/kids-categorys.jpg";
import Col from "react-bootstrap/esm/Col";

function Categories() {
  return (
    <div className="p-5 mb-5">
      <Container>
        <Row className="pb-5">
          <h3 className="text-success">Shop By Categpries</h3>
          <p className="text-muted">Neque porro quisquam est qui dolorem</p>
        </Row>
        <Row className="d-flex justify-content-center align-items-center ">
          <Col sm="12" lg="4" className="p-0">
            <CategoriesCard title="Men's" numProduct="88" img={mensImg} />
          </Col>
          <Col sm="12" lg="4" className="p-0">
            <CategoriesCard title="Women's" numProduct="45" img={womensImg} />
          </Col>
          <Col sm="12" lg="4" className="p-0">
            <CategoriesCard title="Kid's" numProduct="29" img={kidsImg} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Categories;
