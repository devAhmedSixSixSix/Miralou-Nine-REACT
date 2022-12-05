import React from "react";
import Container from "react-bootstrap/esm/Container";

function HeaderBanner({ title, img }) {
  const bgImg = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "35vh",
    position: "relative",
  };
  const overlay = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    zIndex: "2",
  };
  return (
    <div style={bgImg}>
      <div style={overlay}>
        <Container>
          <h3 className=" text-warning pt-5 ">{title}</h3>
        </Container>
      </div>
    </div>
  );
}

export default HeaderBanner;
