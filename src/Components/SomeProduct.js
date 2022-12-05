import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function SomeProduct({ data }) {
  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="pb-3">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className=" text-success">Our Product</h3>
            <Link to="shop" className="text-decoration-none">
              <p className="text-muted">View More</p>
            </Link>
          </div>
        </Row>

        <Row>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is <= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              // when window width is <= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {data &&
              data.slice(0, 8).map((ele, index) => (
                <Col key={index}>
                  <SwiperSlide>
                    <div className="text-center m-2">
                      <div className="bg-light mb-2 rounded">
                        <img
                          src={ele.image}
                          alt="test"
                          width={200}
                          height={200}
                        />
                      </div>
                      <p className="text-muted">{ele.category}</p>
                      <h6>
                        {ele.title.length > 30
                          ? ele.title.slice(0, 20) + "..."
                          : ele.title}
                      </h6>
                      <p className="text-muted">{ele.price}$</p>
                      <Link to={`/productpage/${ele.id}`}>
                        <Button variant="success" className="w-100 mb-5">
                          Veiw Product
                        </Button>
                      </Link>
                    </div>
                  </SwiperSlide>
                </Col>
              ))}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
}

export default SomeProduct;
