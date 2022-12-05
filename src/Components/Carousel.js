import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img from "../Assest/Images/c7daa18726ed2b08dfabbf51b460fb8a.jpg";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

function Carousel() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        el: ".swiper-pagination",
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={img} alt="test" className="w-75 h-75" />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <h3 className="text-white">
                Choose Your
                <br />
                Shoes With Us
              </h3>
              <p className="text-muted">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
              <Button>Shop Now</Button>
            </div>
          </Col>
        </Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={img} alt="test" className="w-75 h-75" />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <h2 className="text-white fw-lighter">
                Choose
                <br />
                whatever suits you
              </h2>
              <p className="text-muted">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
              <Button>Shop Now</Button>
            </div>
          </Col>
        </Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={img} alt="test" className="w-75 h-75" />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <h3 className="text-white">
                Choose Your
                <br />
                Shoes With Us
              </h3>
              <p className="text-muted">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
              <Button>Shop Now</Button>
            </div>
          </Col>
        </Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={img} alt="test" className="w-75 h-75" />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <h3 className="text-white">
                Choose Your
                <br />
                Shoes With Us
              </h3>
              <p className="text-muted">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
              <Button>Shop Now</Button>
            </div>
          </Col>
        </Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={img} alt="test" className="w-75 h-75" />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <h3 className="text-white">
                Choose Your
                <br />
                Shoes With Us
              </h3>
              <p className="text-muted">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
              <Button>Shop Now</Button>
            </div>
          </Col>
        </Row>
      </SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

export default Carousel;
