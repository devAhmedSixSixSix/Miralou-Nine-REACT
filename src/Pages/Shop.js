import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import HeaderBanner from "../Components/HeaderBanner";
import ShopProductCard from "../Components/ShopProductCard";
import img from "../Assest/Images/shop.jpg";
import Row from "react-bootstrap/esm/Row";
import ShopSideBar from "../Components/ShopSideBar";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/Spinner";

function Shop({ data }) {
  // get categorys names
  const [category, setCategory] = useState();
  const categorysNames = [];
  data && data.map((item) => categorysNames.push(item.category));
  const filterdCategorysNames = [...new Set(categorysNames)];

  // filter based on category name
  let allData =
    data &&
    data.filter((item) =>
      category === "all" ? data : item.category === category
    );

  // get lowest & highest price
  const itemsPrices = [];
  const higestAndLoestPrice = [];
  data && data.map((ele) => itemsPrices.push(ele.price));
  higestAndLoestPrice.push(Math.max(...itemsPrices), Math.min(...itemsPrices));
  higestAndLoestPrice.sort();

  const [lowest, setLoest] = useState(higestAndLoestPrice[0]);
  const [highest, setHighest] = useState(higestAndLoestPrice[1]);

  // filter based on price
  const filterPrisedData =
    allData &&
    allData.filter((item) => item.price <= highest && item.price >= lowest);
  const checedFilterPrisedData =
    filterPrisedData && filterPrisedData.length <= 0 ? data : filterPrisedData;

  return (
    <div>
      <HeaderBanner title="Shop" img={img} />
      <div className=" d-flex justify-content-center">
        <Container className="p-5 m-5 ">
          <Row>
            <Col xs={12} lg={3}>
              <ShopSideBar
                setLoest={setLoest}
                setHighest={setHighest}
                setCategory={setCategory}
                filterdCategorysNames={filterdCategorysNames}
              />
            </Col>
            <Col xs={12} lg={9}>
              {data === null ? (
                <div className="d-flex align-items-center justify-content-center my-5">
                  <Spinner animation="border" />
                </div>
              ) : (
                <ShopProductCard data={checedFilterPrisedData} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Shop;
