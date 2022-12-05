import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import ProductPageGallery from "../Components/ProductPageGallery";
import ProductPageInfo from "../Components/ProductPageInfo";
import SomeProduct from "../Components/SomeProduct";
import Spinner from "react-bootstrap/Spinner";

function ProductPage({ data, addToCart, addToWishlist }) {
  const [alldata, setAllData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setAllData(data);
    };
    getData();
  }, [id]);
  return (
    <div>
      <Container>
        {alldata === null ? (
          <div className="d-flex align-items-center justify-content-center my-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row className="my-5">
            <Col sm={12} lg={6} className=" d-flex align-items-center ">
              {alldata && <ProductPageGallery alldata={alldata} />}
            </Col>
            <Col sm={12} lg={6}>
              <ProductPageInfo
                alldata={alldata}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            </Col>
          </Row>
        )}
        <Row>
          <Col className="py-5">
            {data === null ? (
              <div className="d-flex align-items-center justify-content-center">
                <Spinner animation="border" />
              </div>
            ) : (
              <SomeProduct data={data} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductPage;
