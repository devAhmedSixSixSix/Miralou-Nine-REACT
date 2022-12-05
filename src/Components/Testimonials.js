import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Testimonials() {
  return (
    <div className="p-0">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="text-center bg-light mt-5 py-5 rounded">
          <p className="w-75 m-auto">
            porttitor odio quis, laoreet lobortis elit. Ut ut porttitor . Nunc
            viverra v ulputate tortor ut porttitor. Nullam tini at lorem
            commodo, nec c ommodo nisl malesuada tempor quis eu magna.
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center bg-light mt-5 py-5 rounded">
          <p className="w-75 m-auto">
            porttitor odio quis, laoreet lobortis elit. Ut ut porttitor . Nunc
            viverra v ulputate tortor ut porttitor. Nullam tini at lorem
            commodo, nec c ommodo nisl malesuada tempor quis eu magna.
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center bg-light mt-5 py-5 rounded">
          <p className="w-75 m-auto">
            porttitor odio quis, laoreet lobortis elit. Ut ut porttitor . Nunc
            viverra v ulputate tortor ut porttitor. Nullam tini at lorem
            commodo, nec c ommodo nisl malesuada tempor quis eu magna.
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center bg-light mt-5 py-5 rounded">
          <p className="w-75 m-auto">
            porttitor odio quis, laoreet lobortis elit. Ut ut porttitor . Nunc
            viverra v ulputate tortor ut porttitor. Nullam tini at lorem
            commodo, nec c ommodo nisl malesuada tempor quis eu magna.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
