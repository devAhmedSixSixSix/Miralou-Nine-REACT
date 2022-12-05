import React from "react";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import SomeProduct from "../Components/SomeProduct";
import SomeInfo from "../Components/SomeInfo";
import OurPartners from "../Components/OurPartners";
import Spinner from "react-bootstrap/Spinner";

function Home({ data }) {
  return (
    <div>
      <Hero />
      <Categories />
      {data === null ? (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <SomeProduct data={data} />
      )}
      <SomeInfo />
      <OurPartners />
    </div>
  );
}

export default Home;
